import { useContext } from "react";
import AuthContext from "./Authcontext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">MyBlog</h1>

      <div className="flex gap-6 items-center">
        <Link className="hover:text-yellow-400" to="/">Home</Link>

        {isAuthenticated && (
          <Link className="hover:text-yellow-400" to="/create">
            Create Post
          </Link>
        )}

        {!isAuthenticated ? (
          <Link
            className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600"
            to="/login"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;