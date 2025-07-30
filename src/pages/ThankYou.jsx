import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="max-w-md mx-auto py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Thank You!</h2>
      <p className="mb-6 text-gray-700">Your order has been placed successfully. We hope you enjoy your meal!</p>
      <Link to="/menu" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">Order More</Link>
    </div>
  );
}

export default ThankYou;