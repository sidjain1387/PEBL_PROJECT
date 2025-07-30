import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Toast from "./Toast";

function FoodItem({ item }) {
  const { addItem, increaseQuantity, decreaseQuantity, items } = useCart();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [toast, setToast] = useState(null);
  
  // Check if item is in cart and get quantity
  const cartItem = items.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const isInCart = quantity > 0;
  
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };
  
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    
    return stars;
  };

  const handleAddToCart = () => {
    addItem(item);
    showToast(`${item.name} added to cart!`);
  };

  const handleIncrease = () => {
    increaseQuantity(item.id);
    showToast(`${item.name} quantity increased!`);
  };

  const handleDecrease = () => {
    decreaseQuantity(item.id);
    const newQuantity = quantity - 1;
    if (newQuantity === 0) {
      showToast(`${item.name} removed from cart!`, 'error');
    } else {
      showToast(`${item.name} quantity decreased!`);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col h-full">
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-48 object-cover cursor-pointer"
            onClick={() => setShowFullDescription(true)}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80";
            }}
          />
          <div className="absolute top-3 right-3">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              item.veg ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}>
              <span className={`w-2 h-2 rounded-full mr-1 ${item.veg ? "bg-green-500" : "bg-red-500"}`}></span>
              {item.veg ? "Veg" : "Non-Veg"}
            </span>
          </div>
          <div className="absolute top-3 left-3">
            <span className="bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
              {item.category}
            </span>
          </div>
          {/* Click to view details indicator */}
          <div className="absolute bottom-3 right-3">
            <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
              Click to view details
            </span>
          </div>
        </div>
        
        <div className="p-4 flex flex-col h-full">
          <h3 
            className="font-bold text-lg text-gray-800 mb-1 cursor-pointer hover:text-orange-600 transition-colors duration-200 line-clamp-1"
            onClick={() => setShowFullDescription(true)}
            title={item.name}
          >
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 flex-1 line-clamp-2" title={item.description}>
            {item.description}
          </p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              {renderStars(item.rating)}
              <span className="text-sm text-gray-600 ml-1">({item.rating})</span>
            </div>
            <div className="text-xl font-bold text-orange-600">₹{item.price}</div>
          </div>
          
          {/* Add to Cart section moved to bottom */}
          <div className="mt-auto">
            {/* Conditional rendering: Add to Cart button OR Quantity controls */}
            {!isInCart ? (
              <button
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                onClick={handleAddToCart}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="material-icons text-sm">add_shopping_cart</span>
                  Add to Cart
                </span>
              </button>
            ) : (
              <div className="flex items-center justify-center bg-gray-50 rounded-lg p-2 border-2 border-green-200">
                <button
                  className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                  onClick={handleDecrease}
                >
                  <span className="material-icons text-sm">remove</span>
                </button>
                <div className="mx-4 text-center">
                  <div className="text-lg font-bold text-gray-800">{quantity}</div>
                  <div className="text-xs text-green-600 font-medium">in cart</div>
                </div>
                <button
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                  onClick={handleIncrease}
                >
                  <span className="material-icons text-sm">add</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Description Modal */}
      {showFullDescription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 modal-backdrop flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto fade-in">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-64 object-cover rounded-t-xl"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80";
                }}
              />
              <button
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
                onClick={() => setShowFullDescription(false)}
              >
                <span className="material-icons">close</span>
              </button>
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  item.veg ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-2 ${item.veg ? "bg-green-500" : "bg-red-500"}`}></span>
                  {item.veg ? "Vegetarian" : "Non-Vegetarian"}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h2>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-orange-600">₹{item.price}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {renderStars(item.rating)}
                    <span className="text-sm text-gray-600 ml-1">({item.rating})</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-500">Category</div>
                  <div className="font-medium text-gray-800">{item.category}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-500">Rating</div>
                  <div className="font-medium text-gray-800">{item.rating}/5.0</div>
                </div>
              </div>
              
              {/* Add to Cart section in modal */}
              <div className="border-t pt-4">
                {!isInCart ? (
                  <button
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg text-lg"
                    onClick={() => {
                      handleAddToCart();
                      setShowFullDescription(false);
                    }}
                  >
                    Add to Cart - ₹{item.price}
                  </button>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium text-gray-800">
                      {quantity} item{quantity > 1 ? 's' : ''} in cart
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
                        onClick={handleDecrease}
                      >
                        <span className="material-icons">remove</span>
                      </button>
                      <span className="text-xl font-bold text-gray-800 min-w-[3rem] text-center">{quantity}</span>
                      <button
                        className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
                        onClick={handleIncrease}
                      >
                        <span className="material-icons">add</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}

export default FoodItem;