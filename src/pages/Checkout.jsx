import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      setError("Please fill all fields.");
      return;
    }
    clearCart();
    navigate("/thank-you");
  };

  if (items.length === 0) {
    return (
      <div className="max-w-md mx-auto py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Checkout</h2>
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Checkout</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;