import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  addFavorite: (recipeId) => {
    const current = get().favorites;
    if (!current.includes(recipeId)) {
      set({ favorites: [...current, recipeId] });
    }
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
  },

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) =>
        favorites.includes(recipe.id) &&
        Math.random() > 0.3 // fake recommendation logic
    );
    set({ recommendations: recommended });
  },
}));
