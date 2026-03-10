import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6 text-gray-600">
        {error?.statusText || error?.message || "Page not found"}
      </p>

      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;