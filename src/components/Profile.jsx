import React, { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    address: "123 Food Street, Taste City, TC 12345",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState(user);

  const handleSave = () => {
    setUser(editUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditUser(user);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">My Profile</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="text-orange-600 hover:text-orange-700 transition duration-200"
          >
            <span className="material-icons text-sm">edit</span>
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="text-green-600 hover:text-green-700 transition duration-200"
            >
              <span className="material-icons text-sm">check</span>
            </button>
            <button
              onClick={handleCancel}
              className="text-red-600 hover:text-red-700 transition duration-200"
            >
              <span className="material-icons text-sm">close</span>
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center mb-6">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
        />
        <div className="ml-4">
          <h3 className="font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-600">Food Lover</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          {isEditing ? (
            <input
              type="text"
              value={editUser.name}
              onChange={(e) => setEditUser({...editUser, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-800">{user.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={editUser.email}
              onChange={(e) => setEditUser({...editUser, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-800">{user.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          {isEditing ? (
            <input
              type="tel"
              value={editUser.phone}
              onChange={(e) => setEditUser({...editUser, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-800">{user.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          {isEditing ? (
            <textarea
              value={editUser.address}
              onChange={(e) => setEditUser({...editUser, address: e.target.value})}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-800">{user.address}</p>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Orders Completed</span>
          <span className="font-semibold text-orange-600">23</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Favorite Cuisine</span>
          <span className="font-semibold text-orange-600">Indian</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
