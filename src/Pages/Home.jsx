import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 text-center">

      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Recipe Book
      </h1>

      <p className="text-lg text-gray-600 mt-4 max-w-xl">
        Discover delicious recipes and start cooking amazing meals today.
      </p>

      <Link
        to="/recipes"
        className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg font-medium hover:bg-yellow-600 transition duration-300 shadow-md"
      >
        Explore Recipes
      </Link>

      <Link
        to="/categories"
        className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg font-medium hover:bg-yellow-600 transition duration-300 shadow-md"
      >
        Explore Categories
      </Link>
    </div>
  );
};

export default Home;