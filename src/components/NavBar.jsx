import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

function NavBar() {
  const { items } = useCart();
  const location = useLocation();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="material-icons text-white text-sm">restaurant</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                FoodOrder
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <Link 
                to="/menu" 
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === "/menu" 
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md" 
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                Menu
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/cart" 
              className="relative group p-2 rounded-lg hover:bg-orange-50 transition-all duration-200"
            >
              <span className="material-icons text-gray-700 group-hover:text-orange-600 transition-colors duration-200">
                shopping_cart
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Link 
                to="/menu" 
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                <span className="material-icons">menu</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;