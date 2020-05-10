<template lang="pug">
div(v-if="dataReady")
    ul(class="recipe-list")
        <Recipe :recipe="recipe" v-for="recipe in recipeDetailsData" @click.native="setRecipeDetailsVisibility(recipe)"/>
    <RecipeDetails :recipe="recipeDetails" v-if="recipeDetailsVisible" @setRecipeDetailsVisibility="recipeDetailsVisible=false"/>
</template>

<script lang="ts">
import Vue from 'vue';
import RecipeData from '@/models/recipeData';
import SingleRecipe from '@/models/singleRecipe';
import SingleRecipeDetailsData from '@/models/singleRecipeDetailsData';
import RecipeDetails from '@/components/RecipeDetails.vue';
import Recipe from '@/components/Recipe.vue';

export default Vue.extend({
  name: 'Recipes',
  components: { RecipeDetails, Recipe },
  data() {
    return {
      api: 'https://api.spoonacular.com/recipes/search?',
      apiKey: 'apiKey=c0473e8d783f463187f711d281ba16be',
      query: '&query=pasta',
      amountOfResults: 4,
      recipeData: [] as SingleRecipe[],
      dataReady: false,
      recipeDetailsVisible: false,
      recipeDetails: {} as SingleRecipeDetailsData,
      recipeDetailsData: [] as SingleRecipeDetailsData[],
    };
  },
  methods: {
    async getRecipesFetch() {
      const fetchRecipes = await fetch(`${this.api + this.apiKey + this.query}&number=${this.amountOfResults}`);
      const rawRecipes = await fetchRecipes.json();
      const recipes = await rawRecipes as RecipeData;

      await recipes.results.forEach((el) => {
        this.recipeData.push(new SingleRecipe(el));
      });
      this.getRecipesDetails();
    },

    setRecipeDetailsVisibility(recipe: SingleRecipeDetailsData) {
      this.recipeDetailsVisible = true;
      this.recipeDetails = recipe;
    },

    async getRecipesDetails() {
      const recipesIds: string = this.recipeData.map((recipe) => recipe.id).join(',');
      const fetchRecipesDetails = await fetch(`https://api.spoonacular.com/recipes/informationBulk?${this.apiKey}&ids=${recipesIds}`);
      const rawRecipesDetails = await fetchRecipesDetails.json();

      await rawRecipesDetails.forEach((element: { id: number; title: string; image: string; instructions: string; extendedIngredients: [] }) => {
        this.recipeDetailsData.push(new SingleRecipeDetailsData(element));
      });

      this.dataReady = true;
    },
  },
  mounted() {
    this.getRecipesFetch();
  },
});
</script>

<style lang="scss" scoped>
.recipe-list{
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 0;
  margin: 30px 0;
  @media screen and (min-width: 1024px){
    grid-template-columns: 1fr 1fr;
  }
}
</style>
