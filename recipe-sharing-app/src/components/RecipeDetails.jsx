// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(recipeId))
  );
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <EditRecipeForm existingRecipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} onDeleted={() => navigate('/')} />
    </div>
  );
};

export default RecipeDetails;
