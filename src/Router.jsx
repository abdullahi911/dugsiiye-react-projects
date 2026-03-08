import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import RecipeDetail from "./Pages/RecipeDetail";
import Categories from "./Pages/Categories";
import CategoryRecipes from "./Pages/CategoryRecipes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "recipes", element: <Recipes /> },
      { path: "recipes/:id", element: <RecipeDetail /> },
      {
        path: "categories",
        element: <Categories />,          
        children: [
          { path: ":categoryId", element: <CategoryRecipes /> } 
        ]
      }
    ]
  }
]);

export default Router;