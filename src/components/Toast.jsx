import React, { useState, useEffect } from 'react';

function Toast({ message, type = 'success', duration = 2000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`fixed top-20 right-4 z-50 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ${
      type === 'success' 
        ? 'bg-green-500 text-white' 
        : type === 'error' 
        ? 'bg-red-500 text-white'
        : 'bg-blue-500 text-white'
    } fade-in`}>
      <div className="flex items-center gap-2">
        <span className="material-icons text-sm">
          {type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}
        </span>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}

export default Toast;
