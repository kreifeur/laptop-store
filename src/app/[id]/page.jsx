"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter, FaShoppingCart, FaStar, FaRegStar, FaStarHalfAlt, FaHeart, FaShare, FaArrowLeft } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartDropdown from "../components/CartDropdown";

// Sample product data (in a real app, this would come from an API or props)
const product = {
  id: 1,
  name: "MacBook Pro 16\"",
  price: 2399,
  originalPrice: 2599,
  images: [
    "/macbook-front.jpg",
    "/macbook-side.jpg",
    "/macbook-keyboard.jpg",
    "/macbook-ports.jpg"
  ],
  category: "Laptops",
  brand: "Apple",
  rating: 4.8,
  reviewCount: 124,
  description: "The most powerful MacBook Pro ever is here. With the blazing-fast M2 Pro or M2 Max chip, let's you build and test in environments never before possible on a notebook.",
  features: [
    "M2 Pro or M2 Max chip for unprecedented performance",
    "Up to 96GB of unified memory",
    "Up to 8TB of superfast SSD storage",
    "16.2-inch Liquid Retina XDR display",
    "Up to 22 hours of battery life",
    "Advanced thermal system for sustained performance",
    "1080p FaceTime HD camera with studio-quality mics",
    "Six-speaker sound system with Spatial Audio"
  ],
  specifications: {
    "Display": "16.2-inch Liquid Retina XDR display, 3456-by-2234 resolution",
    "Chip": "Apple M2 Pro 12-core CPU, 19-core GPU, 16-core Neural Engine",
    "Memory": "16GB unified memory",
    "Storage": "1TB SSD",
    "Battery": "Up to 22 hours Apple TV app movie playback",
    "Ports": "SDXC card slot, HDMI port, 3.5mm headphone jack, MagSafe 3 port, Three Thunderbolt 4 ports",
    "Wireless": "Wi-Fi 6E (802.11ax), Bluetooth 5.3",
    "Camera": "1080p FaceTime HD camera",
    "Audio": "High-fidelity six-speaker sound system with force-cancelling woofers",
    "Weight": "4.7 pounds (2.14 kg)"
  },
  inStock: true,
  isNew: true,
  tags: ["Premium", "Professional", "Creative", "Apple"],
  colors: ["Space Gray", "Silver"],
  sku: "MBP16M2-2023",
  warranty: "1 Year Limited Warranty"
};

const relatedProducts = [
  {
    id: 2,
    name: "MacBook Air 13\"",
    price: 1199,
    originalPrice: 1299,
    image: "/macbook-air.jpg",
    category: "Laptops",
    brand: "Apple",
    rating: 4.7,
    description: "The world's best-selling laptop, now with the M2 chip."
  },
  {
    id: 3,
    name: "Apple Magic Keyboard",
    price: 149,
    originalPrice: 169,
    image: "/magic-keyboard.jpg",
    category: "Accessories",
    brand: "Apple",
    rating: 4.5,
    description: "Keyboard with numeric keypad and Touch ID."
  },
  {
    id: 4,
    name: "Apple Magic Mouse",
    price: 99,
    originalPrice: 119,
    image: "/magic-mouse.jpg",
    category: "Accessories",
    brand: "Apple",
    rating: 4.3,
    description: "Wireless mouse with Multi-Touch surface."
  },
  {
    id: 5,
    name: "USB-C to MagSafe 3 Cable",
    price: 49,
    originalPrice: 59,
    image: "/magsafe-cable.jpg",
    category: "Accessories",
    brand: "Apple",
    rating: 4.6,
    description: "2m USB-C to MagSafe 3 Cable."
  }
];

const reviews = [
  {
    id: 1,
    user: "Sarah Johnson",
    rating: 5,
    date: "2025-08-15",
    title: "Absolutely incredible machine",
    content: "This is by far the best laptop I've ever used. The performance is unmatched, battery life is incredible, and the display is stunning. Worth every penny for creative professionals.",
    verified: true
  },
  {
    id: 2,
    user: "Michael Chen",
    rating: 4,
    date: "2025-08-10",
    title: "Powerful but expensive",
    content: "The performance is outstanding and the build quality is typical Apple excellence. Only giving 4 stars because of the price tag - it's a significant investment.",
    verified: true
  },
  {
    id: 3,
    user: "Emma Williams",
    rating: 5,
    date: "2025-08-05",
    title: "Perfect for video editing",
    content: "I edit 4K video and this machine handles everything I throw at it without breaking a sweat. The fans rarely even turn on during my workflow.",
    verified: false
  }
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
        ))}
      </div>
    );
  };

  // Add to cart function
  const addToCart = (productToAdd, qty = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === productToAdd.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === productToAdd.id 
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { 
        ...productToAdd, 
        quantity: qty,
        // Ensure we have the image property for cart display
        image: productToAdd.image || productToAdd.images?.[0] 
      }];
    });
    
    // Show success message
    alert(`Added ${qty} ${productToAdd.name} to cart!`);
  };

  // Handle adding the main product to cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Update quantity in cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      setCartItems(cartItems.filter(item => item.id !== productId));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="flex items-center flex-col max-w-screen min-h-screen">
      <div className="w-[90%] flex flex-col items-center">
        {/* navbar */}
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          cartItems={cartItems}
          showCart={showCart}
          setShowCart={setShowCart}
        />

        {/* Back button */}
        <div className="w-full py-4">
          <a href="/products"
            
            className="flex items-center gap-2 text-[#18ABC6] font-[500]"
          >
            <FaArrowLeft /> Back to Products
          </a>
        </div>

        {/* Product Section */}
        <section className="w-full flex sm:flex-row flex-col gap-8 mb-12">
          {/* Product Images */}
          <div className="sm:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="h-96 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((_, index) => (
                  <div 
                    key={index}
                    className={`w-20 h-20 bg-gray-200 rounded cursor-pointer ${selectedImage === index ? 'ring-2 ring-[#18ABC6]' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="sm:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-500">{product.brand}</span>
                {product.isNew && (
                  <span className="bg-[#fd346e] text-white text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {!product.inStock && (
                  <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">
                    OUT OF STOCK
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-[#1c274c] mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <StarRating rating={product.rating} />
                <span className="text-gray-600">{product.reviewCount} reviews</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-[#1c274c]">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice > product.price && (
                  <span className="bg-[#18ABC6] bg-opacity-10 text-[#18ABC6] px-2 py-1 rounded text-sm">
                    Save ${product.originalPrice - product.price}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:border-[#18ABC6]"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex sm:flex-row flex-col gap-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    className="px-3 py-2 text-gray-600"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button 
                    className="px-3 py-2 text-gray-600"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 rounded font-[500] ${
                    product.inStock 
                      ? "bg-[#18ABC6] text-white hover:bg-[#0f7a94]"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                  <FaHeart className="text-gray-600" />
                </button>
              </div>

              {/* Product Meta */}
              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">SKU:</span> {product.sku}
                  </div>
                  <div>
                    <span className="text-gray-500">Category:</span> {product.category}
                  </div>
                  <div>
                    <span className="text-gray-500">Warranty:</span> {product.warranty}
                  </div>
                  <div>
                    <span className="text-gray-500">Delivery:</span> 2-4 business days
                  </div>
                </div>
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-4 mt-6">
                <span className="text-gray-500">Share:</span>
                <button className="text-gray-600 hover:text-[#1877F2]">
                  <FaFacebookF />
                </button>
                <button className="text-gray-600 hover:text-[#1DA1F2]">
                  <FaTwitter />
                </button>
                <button className="text-gray-600 hover:text-[#E1306C]">
                  <FaInstagram />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tabs */}
        <section className="w-full mb-12">
          <div className="bg-white rounded-2xl shadow-md">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex overflow-x-auto">
                {["description", "specifications", "reviews", "shipping"].map(tab => (
                  <button
                    key={tab}
                    className={`px-6 py-4 font-medium capitalize ${activeTab === tab ? 'text-[#18ABC6] border-b-2 border-[#18ABC6]' : 'text-gray-600 hover:text-[#1c274c]'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "description" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#18ABC6] mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex border-b border-gray-100 pb-3">
                        <div className="w-1/3 font-medium text-gray-700">{key}</div>
                        <div className="w-2/3 text-gray-600">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  
                  {/* Review Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#1c274c]">{product.rating}</div>
                        <StarRating rating={product.rating} />
                        <div className="text-sm text-gray-600 mt-1">{product.reviewCount} reviews</div>
                      </div>
                      <div className="flex-1">
                        {[5, 4, 3, 2, 1].map(stars => (
                          <div key={stars} className="flex items-center gap-2 mb-1">
                            <div className="w-10 text-sm">{stars} star</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-yellow-400 h-2 rounded-full" 
                                style={{ width: `${(stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 7 : stars === 2 ? 2 : 1)}%` }}
                              ></div>
                            </div>
                            <div className="w-10 text-sm text-right">
                              {stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 7 : stars === 2 ? 2 : 1}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {reviews.map(review => (
                      <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{review.user}</h4>
                            <div className="flex items-center gap-2">
                              <StarRating rating={review.rating} />
                              <span className="text-sm text-gray-500">{review.date}</span>
                              {review.verified && (
                                <span className="text-xs bg-[#18ABC6] bg-opacity-10 text-[#18ABC6] px-2 py-1 rounded">
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <h5 className="font-medium mb-1">{review.title}</h5>
                        <p className="text-gray-600">{review.content}</p>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 px-6 py-2 border border-[#18ABC6] text-[#18ABC6] rounded-lg hover:bg-[#18ABC6] hover:text-white transition">
                    Write a Review
                  </button>
                </div>
              )}

              {activeTab === "shipping" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Shipping & Returns</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Shipping</h4>
                      <p className="text-gray-600">
                        We offer free standard shipping on orders over $499. Most orders are processed within 24 hours and delivered within 2-4 business days. Express shipping options are available at checkout.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Returns</h4>
                      <p className="text-gray-600">
                        We offer a 30-day return policy for unused products in original packaging. Return shipping is free for defective items. Please contact our support team to initiate a return.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Warranty</h4>
                      <p className="text-gray-600">
                        This product comes with a 1-year limited warranty that covers manufacturing defects. Extended warranty options are available at checkout.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="w-full mb-12">
          <h2 className="text-2xl font-semibold text-[#1c274c] mb-6">You might also like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-2 left-2 bg-[#18ABC6] bg-opacity-90 text-white text-xs px-2 py-1 rounded">
                    {relatedProduct.brand}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[500] text-lg text-[#1c274c]">{relatedProduct.name}</h3>
                    <div className="flex flex-col items-end">
                      <span className="font-[600] text-xl text-[#1c274c]">${relatedProduct.price}</span>
                      {relatedProduct.originalPrice > relatedProduct.price && (
                        <span className="text-gray-500 line-through text-sm">${relatedProduct.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{relatedProduct.description}</p>
                  <button 
                    onClick={() => addToCart(relatedProduct, 1)}
                    className="w-full bg-[#18ABC6] text-white py-2 rounded font-[500] hover:bg-[#0f7a94]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Dropdown */}
        <CartDropdown
          cartItems={cartItems}
          cartTotal={cartTotal}
          showCart={showCart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </div>

      <Footer/>
    </div>
  );
}