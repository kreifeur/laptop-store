"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaFilter,
  FaTimes,
} from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import {
  MdLaptop,
  MdHeadphones,
  MdKeyboard,
  MdMouse,
  MdPhoneIphone,
} from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDropdown from "../components/CartDropdown";
// Product data
const products = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    price: 2399,
    originalPrice: 2599,
    image: "/macbook-pro.jpg",
    category: "Laptops",
    brand: "Apple",
    rating: 4.8,
    description:
      "Powerful laptop for professionals with M2 Pro chip, 16GB RAM, and 1TB SSD.",
    features: [
      "M2 Pro Chip",
      "16GB Unified Memory",
      "1TB SSD Storage",
      "16-core GPU",
    ],
    inStock: true,
    isNew: true,
    tags: ["Premium", "Professional", "Creative"],
  },
  {
    id: 2,
    name: "Dell XPS 13",
    price: 1299,
    originalPrice: 1499,
    image: "/dell-xps.jpg",
    category: "Laptops",
    brand: "Dell",
    rating: 4.5,
    description:
      "Sleek ultrabook with Intel i7 processor, 16GB RAM, and 512GB SSD.",
    features: ["Intel i7 Processor", "16GB RAM", "512GB SSD", '13.4" Display'],
    inStock: true,
    isNew: false,
    tags: ["Ultrabook", "Portable", "Business"],
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 349,
    originalPrice: 399,
    image: "/sony-headphones.jpg",
    category: "Headphones",
    brand: "Sony",
    rating: 4.9,
    description:
      "Industry-leading noise canceling headphones with 30-hour battery life.",
    features: [
      "Noise Canceling",
      "30-hour Battery",
      "Quick Charge",
      "Touch Control",
    ],
    inStock: true,
    isNew: true,
    tags: ["Wireless", "Noise Cancelling", "Premium"],
  },
  {
    id: 4,
    name: "Logitech MX Master 3",
    price: 99,
    originalPrice: 129,
    image: "/logitech-mouse.jpg",
    category: "Mice",
    brand: "Logitech",
    rating: 4.7,
    description:
      "Advanced wireless mouse designed for creatives and professionals.",
    features: [
      "Ergonomic Design",
      "Darkfield Tracking",
      "Fast Scrolling",
      "Multi-Device",
    ],
    inStock: true,
    isNew: false,
    tags: ["Ergonomic", "Wireless", "Productivity"],
  },
  {
    id: 5,
    name: "Keychron K8 Pro",
    price: 89,
    originalPrice: 109,
    image: "/keychron-keyboard.jpg",
    category: "Keyboards",
    brand: "Keychron",
    rating: 4.6,
    description:
      "Wireless mechanical keyboard with RGB backlight and hot-swappable switches.",
    features: [
      "Mechanical Switches",
      "RGB Backlight",
      "Bluetooth 5.1",
      "Hot-swappable",
    ],
    inStock: false,
    isNew: true,
    tags: ["Mechanical", "Wireless", "RGB"],
  },
  {
    id: 6,
    name: 'iPad Pro 12.9"',
    price: 1099,
    originalPrice: 1299,
    image: "/ipad-pro.jpg",
    category: "Tablets",
    brand: "Apple",
    rating: 4.8,
    description:
      "Powerful tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
    features: [
      "M2 Chip",
      "Liquid Retina XDR",
      "5G Connectivity",
      "Apple Pencil Support",
    ],
    inStock: true,
    isNew: true,
    tags: ["Tablet", "Creative", "Portable"],
  },
  {
    id: 7,
    name: "Samsung T7 SSD",
    price: 129,
    originalPrice: 149,
    image: "/samsung-ssd.jpg",
    category: "Storage",
    brand: "Samsung",
    rating: 4.7,
    description:
      "Portable SSD with read speeds up to 1,050MB/s and password protection.",
    features: [
      "1TB Capacity",
      "1050MB/s Read",
      "Password Protection",
      "Compact Design",
    ],
    inStock: true,
    isNew: false,
    tags: ["Portable", "Fast", "Secure"],
  },
  {
    id: 8,
    name: "HP Pavilion 15",
    price: 799,
    originalPrice: 899,
    image: "/hp-pavilion.jpg",
    category: "Laptops",
    brand: "HP",
    rating: 4.3,
    description:
      "Affordable laptop with AMD Ryzen 5, 8GB RAM, and 256GB SSD for everyday use.",
    features: ["AMD Ryzen 5", "8GB RAM", "256GB SSD", '15.6" Display'],
    inStock: true,
    isNew: false,
    tags: ["Budget", "Everyday Use", "Student"],
  },
  {
    id: 9,
    name: "Razer BlackWidow V3",
    price: 139,
    originalPrice: 159,
    image: "/razer-keyboard.jpg",
    category: "Keyboards",
    brand: "Razer",
    rating: 4.5,
    description:
      "Mechanical gaming keyboard with Razer Green switches and Chroma RGB lighting.",
    features: [
      "Mechanical Switches",
      "Chroma RGB",
      "Programmable Macros",
      "Gaming Mode",
    ],
    inStock: true,
    isNew: false,
    tags: ["Gaming", "Mechanical", "RGB"],
  },
  {
    id: 10,
    name: "Apple AirPods Pro",
    price: 249,
    originalPrice: 279,
    image: "/airpods-pro.jpg",
    category: "Headphones",
    brand: "Apple",
    rating: 4.7,
    description:
      "Wireless earbuds with active noise cancellation and transparency mode.",
    features: [
      "Active Noise Cancellation",
      "Transparency Mode",
      "Spatial Audio",
      "Wireless Charging",
    ],
    inStock: true,
    isNew: false,
    tags: ["Wireless", "Noise Cancelling", "Apple Ecosystem"],
  },
  {
    id: 11,
    name: "ASUS ROG Zephyrus",
    price: 1899,
    originalPrice: 2099,
    image: "/asus-laptop.jpg",
    category: "Laptops",
    brand: "ASUS",
    rating: 4.6,
    description:
      "Gaming laptop with NVIDIA RTX 4070, AMD Ryzen 9, and 16GB RAM for ultimate performance.",
    features: [
      "NVIDIA RTX 4070",
      "AMD Ryzen 9",
      "16GB RAM",
      "1TB SSD",
      "144Hz Display",
    ],
    inStock: true,
    isNew: true,
    tags: ["Gaming", "Performance", "Premium"],
  },
  {
    id: 12,
    name: "Samsung Galaxy Tab S8",
    price: 899,
    originalPrice: 999,
    image: "/samsung-tablet.jpg",
    category: "Tablets",
    brand: "Samsung",
    rating: 4.5,
    description:
      "Android tablet with S Pen included, Snapdragon 8 Gen 1 processor, and 120Hz display.",
    features: [
      "S Pen Included",
      "Snapdragon 8 Gen 1",
      "120Hz Display",
      "5G Connectivity",
    ],
    inStock: true,
    isNew: false,
    tags: ["Android", "Creative", "Portable"],
  },
];

const categories = [
  { name: "All Products", icon: <BiSolidCategory />, count: products.length },
  {
    name: "Laptops",
    icon: <MdLaptop />,
    count: products.filter((p) => p.category === "Laptops").length,
  },
  {
    name: "Headphones",
    icon: <MdHeadphones />,
    count: products.filter((p) => p.category === "Headphones").length,
  },
  {
    name: "Keyboards",
    icon: <MdKeyboard />,
    count: products.filter((p) => p.category === "Keyboards").length,
  },
  {
    name: "Mice",
    icon: <MdMouse />,
    count: products.filter((p) => p.category === "Mice").length,
  },
  {
    name: "Tablets",
    icon: <MdPhoneIphone />,
    count: products.filter((p) => p.category === "Tablets").length,
  },
  {
    name: "Storage",
    icon: <BiSolidCategory />,
    count: products.filter((p) => p.category === "Storage").length,
  },
];

const brands = [
  "Apple",
  "Dell",
  "HP",
  "ASUS",
  "Sony",
  "Logitech",
  "Samsung",
  "Keychron",
  "Razer",
];
const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $500", min: 100, max: 500 },
  { label: "$500 - $1000", min: 500, max: 1000 },
  { label: "Over $1000", min: 1000, max: 10000 },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice =
      product.price >= priceRange.min && product.price <= priceRange.max;

    return matchesCategory && matchesSearch && matchesBrand && matchesPrice;
  });

  // Sort products based on selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.isNew - a.isNew;
      default:
        return a.id - b.id;
    }
  });

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-sm" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-sm" />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="flex items-center flex-col max-w-screen min-h-screen ">
      <div className="w-[90%] flex flex-col items-center">
        {/* navbar */}
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          cartItems={cartItems}
          showCart={showCart}
          setShowCart={setShowCart}
        />

        {/* Page Header */}
        <section className="w-full py-8 mb-8">
          <h1 className="text-3xl font-bold text-[#1c274c] mb-2">
            Our Products
          </h1>
          <p className="text-gray-600">
            Discover the latest tech products at competitive prices
          </p>
        </section>

        <div className="w-full flex sm:flex-row flex-col gap-8 mb-12">
          {/* Filters Sidebar */}
          <div className="sm:w-1/4 w-full">
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="sm:hidden flex items-center gap-1 text-[#18ABC6]"
                >
                  {showFilters ? <FaTimes /> : <FaFilter />}
                  {showFilters ? "Close" : "Filters"}
                </button>
              </div>

              <div className={`${showFilters ? "block" : "hidden"} sm:block`}>
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                          selectedCategory === category.name
                            ? "bg-[#18ABC6] bg-opacity-10"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#18ABC6]">
                            {category.icon}
                          </span>
                          <span>{category.name}</span>
                        </div>
                        <span className="text-gray-500 text-sm">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <div
                        key={range.label}
                        className={`flex items-center p-2 rounded-lg cursor-pointer ${
                          priceRange.min === range.min &&
                          priceRange.max === range.max
                            ? "bg-[#18ABC6] bg-opacity-10"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() =>
                          setPriceRange({ min: range.min, max: range.max })
                        }
                      >
                        <span>{range.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Brands</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div
                        key={brand}
                        className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
                        onClick={() => toggleBrand(brand)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="mr-2 h-4 w-4 text-[#18ABC6] rounded focus:ring-[#18ABC6]"
                        />
                        <span>{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory("All Products");
                    setSelectedBrands([]);
                    setPriceRange({ min: 0, max: 10000 });
                  }}
                  className="w-full text-[#fd346e] font-medium py-2 border border-[#fd346e] rounded-lg hover:bg-[#fd346e] hover:text-white transition"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-[#18ABC6] to-[#0f7a94] rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">Summer Sale</h3>
              <p className="text-sm mb-4">
                Get up to 30% off on selected items
              </p>
              <button className="w-full bg-white text-[#18ABC6] py-2 rounded-lg ">
                <a className="font-medium" href="/products">Shop Now</a>
                
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="sm:w-3/4 w-full">
            <div className="flex sm:flex-row flex-col justify-between items-center mb-8 gap-4">
              <p className="text-gray-600">
                {sortedProducts.length} products found
              </p>

              <div className="flex items-center gap-4">
                <span className="text-gray-600">Sort by:</span>
                <select
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18ABC6]"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gray-200 relative">
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-[#fd346e] text-white text-xs px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="absolute top-2 right-2 bg-gray-500 text-white text-xs px-2 py-1 rounded">
                        OUT OF STOCK
                      </span>
                    )}
                    <span className="absolute bottom-2 left-2 bg-[#18ABC6] bg-opacity-90 text-white text-xs px-2 py-1 rounded">
                      {product.brand}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <a href="/xx" className="font-[500] text-lg text-[#1c274c]">
                        {product.name}
                      </a>
                      <div className="flex flex-col items-end">
                        <span className="font-[600] text-xl text-[#1c274c]">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-gray-500 line-through text-sm">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <StarRating rating={product.rating} />
                    <p className="text-gray-600 text-sm my-3">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`w-full py-2 rounded font-[500] ${
                        product.inStock
                          ? "bg-[#18ABC6] text-white hover:bg-[#0f7a94]"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl shadow-md">
                <p className="text-gray-600 mb-4">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All Products");
                    setSelectedBrands([]);
                    setPriceRange({ min: 0, max: 10000 });
                    setSearchQuery("");
                  }}
                  className="px-4 bg-[#18ABC6] text-white py-2 rounded font-[500]"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {sortedProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                    &lt;
                  </button>
                  <button className="w-10 h-10 bg-[#18ABC6] text-white rounded flex items-center justify-center">
                    1
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                    2
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                    3
                  </button>
                  <span className="px-2">...</span>
                  <button className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                    &gt;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <CartDropdown
          cartItems={cartItems}
          cartTotal={cartTotal}
          showCart={showCart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
