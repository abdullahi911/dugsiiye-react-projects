import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "./Authcontext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white shadow-lg p-8 rounded w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <p className="mb-6 text-gray-600">
          You must login to create a post
        </p>

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;