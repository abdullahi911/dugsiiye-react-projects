import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PostsContext from "./PostsContext";

const Home = () => {
  const { posts } = useContext(PostsContext);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchValue = formData.get("search");
    navigate(`/?search=${encodeURIComponent(searchValue)}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>

      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search posts..."
          defaultValue={searchTerm}
          className="border p-2 rounded w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>

      <ul className="space-y-4">
        {filteredPosts.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded shadow hover:shadow-md"
          >
            <Link
              className="text-xl font-semibold text-blue-600 hover:underline"
              to={`/posts/${post.id}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;