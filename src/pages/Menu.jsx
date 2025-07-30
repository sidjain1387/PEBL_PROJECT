import React, { useState } from "react";
import foodItems from "../data/foodItems";
import FoodItem from "../components/FoodItem";

const categories = ["All", ...Array.from(new Set(foodItems.map(f => f.category)))];

function Menu() {
  const [category, setCategory] = useState("All");
  const [vegFilter, setVegFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filtered = foodItems.filter(item => {
    if (category !== "All" && item.category !== category) return false;
    if (vegFilter === "Veg" && !item.veg) return false;
    if (vegFilter === "Non-Veg" && item.veg) return false;
    if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Delicious Menu</h1>
          <p className="text-gray-600">Discover amazing flavors from our kitchen to your table</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 material-icons">search</span>
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Categories:</span>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    category === cat 
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Veg Filter */}
            <div className="flex gap-2 items-center">
              <span className="text-sm font-medium text-gray-700 mr-2">Diet:</span>
              {["All", "Veg", "Non-Veg"].map(filter => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    vegFilter === filter 
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setVegFilter(filter)}
                >
                  <div className="flex items-center gap-1">
                    {filter === "Veg" && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
                    {filter === "Non-Veg" && <span className="w-2 h-2 bg-red-500 rounded-full"></span>}
                    {filter}
                  </div>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filtered.length} of {foodItems.length} dishes
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {filtered.map(item => (
            <FoodItem key={item.id} item={item} />
          ))}
        </div>

        {/* No Results */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;