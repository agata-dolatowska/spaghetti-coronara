<template lang="pug">
div
  <Form/>
  div
    h1 Get inspired with below recipes
    p Please bear in mind 100% pasta based diet isn't recommended as a healthy nutrition style.
    div
      <Recepe/>
</template>

<script lang="ts">
import Vue from 'vue';
import Form from '@/components/Form.vue';
import Recepe from '@/components/Recepe.vue';
import RecepeData from '@/models/recepeData';
import axios from 'axios';

export default Vue.extend({
  name: 'App',
  components: { Form, Recepe },
  data() {
    return {
      api: 'https://api.spoonacular.com/recipes/search?',
      apiKey: 'apiKey=c0473e8d783f463187f711d281ba16be',
      query: '&query=pasta',
      amountOfResults: 4,
      recipesJSON: JSON,
    };
  },

  methods: {
    getRecipes() {
      axios.get(`${this.api + this.apiKey + this.query}&number=${this.amountOfResults}`)
        .then((response) => {
          console.log(response.data); // surowy
          const collection = response.data as RecepeData;
          collection.results.forEach((element) => {
            console.log(`Przepis -> ${element.id} -> ${element.title}`);
          });
        }).catch((e) => {
          console.log(`Something went wrong: ${e}`);
        });
    },
  },

  mounted() {
    this.getRecipes();
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

* {
  box-sizing: border-box;
}

body{
  // background-color: lightgray;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.title{
  font-weight: 300;
  font-size: 30px;
  text-align: center;
  @media screen and (min-width: 1024px){
    font-size: 45px;
  }
}

</style>
