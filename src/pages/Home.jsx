import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                FoodOrder
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover amazing flavors from street food to fine dining, delivered fast to your door
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/menu" 
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="material-icons mr-2">restaurant_menu</span>
                Browse Menu
              </Link>
              <div className="flex items-center text-gray-600">
                <span className="material-icons text-green-500 mr-2">delivery_dining</span>
                <span>Free delivery on orders above ₹500</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose FoodOrder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-white text-2xl">flash_on</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your favorite food delivered in 30 minutes or less</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-white text-2xl">restaurant</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Food</h3>
              <p className="text-gray-600">Fresh ingredients and authentic recipes from local chefs</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-white text-2xl">star</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Top Rated</h3>
              <p className="text-gray-600">Highly rated dishes from the best restaurants in town</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Dishes Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-orange-100">Restaurant Partners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.8★</div>
              <div className="text-orange-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Order?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied customers and taste the difference</p>
          <Link 
            to="/menu" 
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="material-icons mr-2">shopping_cart</span>
            Start Ordering Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;