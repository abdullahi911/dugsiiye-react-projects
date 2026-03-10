import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Login from "./Login";
import CreatePost from "./CreatePost";
import PostDetails from "./PostDetails";
import ProtectedRoute from "./Protected";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },

      { path: "login", element: <Login /> },

      {
        path: "create",
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ),
      },

      { path: "posts/:postId", element: <PostDetails /> },
    ],
  },
]);

export default router;