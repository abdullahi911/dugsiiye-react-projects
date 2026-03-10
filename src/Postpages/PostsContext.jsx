import { createContext, useState } from "react";

const PostsContext = createContext();

const initialPosts = [
  { id: 1, title: "First Post", content: "This is the first post." },
  { id: 2, title: "Second Post", content: "This is the second post." },
  { id: 3, title: "Third Post", content: "This is the third post." },
];

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (post) => {
    const newPost = { id: posts.length + 1, ...post };
    setPosts([...posts, newPost]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;