// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom'; // ✅ Required import

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Hook for redirection

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);

      // If an onDeleted callback is provided, call it
      if (onDeleted) {
        onDeleted();
      } else {
        // Otherwise, navigate back to the home page
        navigate('/');
      }
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '1rem', color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
