import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Profile from "../components/Profile";

function Cart() {
  const { items } = useCart();
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = items.length > 0 ? (total > 500 ? 0 : 40) : 0;
  const finalTotal = total + deliveryFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Profile />
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {items.length} items
                </span>
              </div>

              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Add some delicious items to get started!</p>
                  <Link 
                    to="/menu" 
                    className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                  >
                    <span className="material-icons mr-2">restaurant_menu</span>
                    Browse Menu
                  </Link>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {items.map(item => <CartItem key={item.id} item={item} />)}
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>₹{total}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Delivery Fee</span>
                        <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                      </div>
                      {total > 0 && total <= 500 && (
                        <div className="text-sm text-orange-600">
                          Add ₹{500 - total} more for free delivery!
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between font-bold text-lg text-gray-800">
                        <span>Total</span>
                        <span>₹{finalTotal}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/menu"
                      className="flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium"
                    >
                      <span className="material-icons mr-2">arrow_back</span>
                      Continue Shopping
                    </Link>
                    <button
                      className="flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg flex-1"
                      onClick={() => navigate("/checkout")}
                    >
                      <span className="material-icons mr-2">payment</span>
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;