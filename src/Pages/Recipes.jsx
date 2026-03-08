import { Link } from "react-router-dom";
import { recipes } from "./data";

const Recipes = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">All Recipes</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded text-sm">
              {recipe.category}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipes;