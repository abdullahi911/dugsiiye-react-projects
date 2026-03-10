import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostsContext from "./PostsContext";

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Create New Post</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white shadow p-6 rounded"
      >
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          className="border p-2 rounded"
          required
        />

        <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;