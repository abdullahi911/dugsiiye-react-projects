import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import Categories from "./Categories";
import CategoryRecipes from "./CategoryRecipes";

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