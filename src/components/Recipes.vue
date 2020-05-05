<template lang="pug">
div(v-if="dataReady")
    ul(class="recipe-list")
        li(v-for="recepe in superfajnecoś" :key="recepe.id")
          img(v-bind:src="recepe.image" class="recepe-img")
          p {{recepe.title}}
</template>

<script lang="ts">
import Vue from 'vue';
import RecepeData from '@/models/recepeData';
import SingleRecepe from '@/models/singleRecepe';

export default Vue.extend({
  name: 'Recipes',
  data() {
    return {
      api: 'https://api.spoonacular.com/recipes/search?',
      apiKey: 'apiKey=c0473e8d783f463187f711d281ba16be',
      query: '&query=pasta',
      amountOfResults: 4,
      superfajnecoś: [] as SingleRecepe[],
      dataReady: false,
    };
  },
  methods: {
    async getRecipesFetch() {
      const fetchRecipes = await fetch(`${this.api + this.apiKey + this.query}&number=${this.amountOfResults}`);
      const rawRecipes = await fetchRecipes.json();
      const recipes = await rawRecipes as RecepeData;

      await recipes.results.forEach((el) => {
        this.superfajnecoś.push(new SingleRecepe(el));
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

.recepe-img{
  width: 100%;
}
</style>
