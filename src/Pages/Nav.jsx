import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          RecipeApp
        </h1>

        {/* Links */}
        <div className="space-x-6 text-lg">
          <Link 
            to="/" 
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>

          <Link 
            to="/recipes" 
            className="hover:text-yellow-400 transition duration-300"
          >
            Recipes
          </Link>

          <Link 
            to="/categories" 
            className="hover:text-yellow-400 transition duration-300"
          >
            Categories
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Nav