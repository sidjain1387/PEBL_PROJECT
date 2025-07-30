import React from "react";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  
  return (
    <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all duration-200">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-16 h-16 object-cover rounded-lg"
        onError={(e) => {
          e.target.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80";
        }}
      />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{item.name}</h4>
        <div className="flex items-center gap-2 mt-1">
          <span className={`w-2 h-2 rounded-full ${item.veg ? "bg-green-500" : "bg-red-500"}`}></span>
          <span className="text-sm text-gray-500">{item.veg ? "Veg" : "Non-Veg"}</span>
        </div>
        <p className="text-sm text-orange-600 font-medium">₹{item.price} each</p>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-white rounded-lg border border-gray-200 shadow-sm">
          <button 
            className="px-3 py-2 text-gray-600 hover:text-red-500 transition-colors duration-200 hover:bg-red-50 rounded-l-lg"
            onClick={() => decreaseQuantity(item.id)}
          >
            <span className="material-icons text-sm">remove</span>
          </button>
          <span className="px-4 py-2 font-medium text-gray-800 border-x border-gray-200">{item.quantity}</span>
          <button 
            className="px-3 py-2 text-gray-600 hover:text-green-500 transition-colors duration-200 hover:bg-green-50 rounded-r-lg"
            onClick={() => increaseQuantity(item.id)}
          >
            <span className="material-icons text-sm">add</span>
          </button>
        </div>
        
        <div className="text-right">
          <div className="font-bold text-gray-800">₹{item.price * item.quantity}</div>
          <button 
            className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200 flex items-center gap-1 mt-1"
            onClick={() => removeItem(item.id)}
          >
            <span className="material-icons text-sm">delete</span>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;