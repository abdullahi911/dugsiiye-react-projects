import React, { useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import PostsContext from "./PostsContext";

const PostDetails = () => {
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentId = parseInt(postId);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return <p className="text-center mt-10">Post not found</p>;
  }

  const handleNavigation = (direction) => {
    const newId = direction === "next" ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`, { state: { fromPostId: currentId } });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>

      <p className="text-gray-700 mb-6">{post.content}</p>

      <div className="flex gap-4">
        {currentId > 1 && (
          <button
            onClick={() => handleNavigation("prev")}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Previous
          </button>
        )}

        {currentId < posts.length && (
          <button
            onClick={() => handleNavigation("next")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        )}
      </div>

      {location.state && (
        <p className="mt-4 text-sm text-gray-500">
          You navigated from post ID: {location.state.fromPostId}
        </p>
      )}
    </div>
  );
};

export default PostDetails;