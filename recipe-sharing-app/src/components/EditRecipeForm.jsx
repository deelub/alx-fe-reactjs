// src/components/EditRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ existingRecipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(existingRecipe.title);
  const [description, setDescription] = useState(existingRecipe.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Prevent default form submission behavior

    updateRecipe({
      id: existingRecipe.id,
      title,
      description,
    });

    setIsEditing(false); // hide the form after editing
  };

  if (!isEditing) {
    return (
      <button onClick={() => setIsEditing(true)} style={{ marginTop: '1rem' }}>
        Edit Recipe
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Save</button>
      <button
        type="button"
        onClick={() => setIsEditing(false)}
        style={{ marginLeft: '0.5rem' }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
