import { useParams, Link } from "react-router-dom";
import { recipes } from "./data.jsx"

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p className="text-center mt-10 text-red-500">Recipe not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <Link
        to="/recipes"
        className="text-rose-600 hover:text-rose-700 mb-4 inline-block"
      >
        ← Back to Recipes
      </Link>

      <h2 className="text-3xl font-bold mb-6">{recipe.title}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
          <ul className="list-disc list-inside space-y-2">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Instructions</h3>
          <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;