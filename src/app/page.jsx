"use client";
import { useState } from "react";
import Navbar from "../app/components/Navbar";
import HeroSection from "../app/components/HeroSection";
import CategoryGrid from "../app/components/CategoryGrid";
import ProductGrid from "../app/components/ProductGrid";
import SpecialOffers from "../app/components/SpecialOffers";
import BrandsSection from "../app/components/BrandsSection";
import FeaturesSection from "../app/components/FeaturesSection";
import Footer from "../app/components/Footer";
import CartDropdown from "../app/components/CartDropdown";
import { BiSolidCategory, BiSolidOffer } from "react-icons/bi";
import { MdLaptop, MdHeadphones, MdKeyboard, MdMouse, MdPhoneIphone } from "react-icons/md";
// Product data
const products = [
  {
    id: 1,
    name: "MacBook Pro 16\"",
    price: 2399,
    originalPrice: 2599,
    image: "../../public/bali.jpg",
    category: "Laptops",
    rating: 4.8,
    description: "Powerful laptop for professionals with M2 Pro chip, 16GB RAM, and 1TB SSD.",
    features: ["M2 Pro Chip", "16GB Unified Memory", "1TB SSD Storage", "16-core GPU"],
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    name: "Dell XPS 13",
    price: 1299,
    originalPrice: 1499,
    image: "/dell-xps.jpg",
    category: "Laptops",
    rating: 4.5,
    description: "Sleek ultrabook with Intel i7 processor, 16GB RAM, and 512GB SSD.",
    features: ["Intel i7 Processor", "16GB RAM", "512GB SSD", "13.4\" Display"],
    inStock: true,
    isNew: false
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 349,
    originalPrice: 399,
    image: "/sony-headphones.jpg",
    category: "Accessories",
    rating: 4.9,
    description: "Industry-leading noise canceling headphones with 30-hour battery life.",
    features: ["Noise Canceling", "30-hour Battery", "Quick Charge", "Touch Control"],
    inStock: true,
    isNew: true
  },
  {
    id: 4,
    name: "Logitech MX Master 3",
    price: 99,
    originalPrice: 129,
    image: "/logitech-mouse.jpg",
    category: "Accessories",
    rating: 4.7,
    description: "Advanced wireless mouse designed for creatives and professionals.",
    features: ["Ergonomic Design", "Darkfield Tracking", "Fast Scrolling", "Multi-Device"],
    inStock: true,
    isNew: false
  },
  {
    id: 5,
    name: "Keychron K8 Pro",
    price: 89,
    originalPrice: 109,
    image: "/bali.jpg",
    category: "Accessories",
    rating: 4.6,
    description: "Wireless mechanical keyboard with RGB backlight and hot-swappable switches.",
    features: ["Mechanical Switches", "RGB Backlight", "Bluetooth 5.1", "Hot-swappable"],
    inStock: false,
    isNew: true
  },
  {
    id: 6,
    name: "iPad Pro 12.9\"",
    price: 1099,
    originalPrice: 1299,
    image: "/ipad-pro.jpg",
    category: "Tablets",
    rating: 4.8,
    description: "Powerful tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
    features: ["M2 Chip", "Liquid Retina XDR", "5G Connectivity", "Apple Pencil Support"],
    inStock: true,
    isNew: true
  },
  {
    id: 7,
    name: "Samsung T7 SSD",
    price: 129,
    originalPrice: 149,
    image: "/samsung-ssd.jpg",
    category: "Accessories",
    rating: 4.7,
    description: "Portable SSD with read speeds up to 1,050MB/s and password protection.",
    features: ["1TB Capacity", "1050MB/s Read", "Password Protection", "Compact Design"],
    inStock: true,
    isNew: false
  },
  {
    id: 8,
    name: "HP Pavilion 15",
    price: 799,
    originalPrice: 899,
    image: "/hp-pavilion.jpg",
    category: "Laptops",
    rating: 4.3,
    description: "Affordable laptop with AMD Ryzen 5, 8GB RAM, and 256GB SSD for everyday use.",
    features: ["AMD Ryzen 5", "8GB RAM", "256GB SSD", "15.6\" Display"],
    inStock: true,
    isNew: false
  }
];

const categories = [
  { name: "All Products", icon: <BiSolidCategory />, count: products.length },
  { name: "Laptops", icon: <MdLaptop />, count: products.filter(p => p.category === "Laptops").length },
  { name: "Accessories", icon: <MdHeadphones />, count: products.filter(p => p.category === "Accessories").length },
  { name: "Tablets", icon: <MdPhoneIphone />, count: products.filter(p => p.category === "Tablets").length },
  { name: "Keyboards", icon: <MdKeyboard />, count: 12 },
  { name: "Mice", icon: <MdMouse />, count: 8 }
];

const brands = ["Apple", "Dell", "HP", "Lenovo", "Sony", "Logitech", "Samsung", "Keychron"];
const specialOffers = [
  {
    id: 1,
    title: "Back to School Sale",
    description: "Get up to 20% off on selected laptops and accessories",
    discount: "20% OFF",
    expires: "2025-09-15"
  },
  {
    id: 2,
    title: "Free Shipping",
    description: "Free shipping on all orders over $499",
    discount: "FREE SHIPPING",
    expires: "2025-12-31"
  }
];

export default function TechStore() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="flex items-center flex-col max-w-screen min-h-screen">
      <div className="w-[90%] flex flex-col items-center">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          cartItems={cartItems}
          showCart={showCart}
          setShowCart={setShowCart}
        />

        <HeroSection />
        <CategoryGrid
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ProductGrid
          products={filteredProducts}
          selectedCategory={selectedCategory}
          onAddToCart={addToCart}
        />
        <SpecialOffers offers={specialOffers} />
        <BrandsSection brands={brands} />
        <FeaturesSection />
        
        {/* Cart Dropdown positioned near root */}
        <CartDropdown
          cartItems={cartItems}
          cartTotal={cartTotal}
          showCart={showCart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
      <Footer />
    </div>
  );
}