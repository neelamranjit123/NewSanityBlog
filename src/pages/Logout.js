import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase/firebase";
import 'tailwindcss/tailwind.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate.push('/login');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div className="text-center mt-4">
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-400 transition duration-300 ease-in-out"
    >
      Logout
    </button>
  </div>
  );
};

export default Logout;

