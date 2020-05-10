<template lang="pug">
div
  <Form/>
  div(class="container")
    div(class="wrapper")
      h1.title Get inspired with below recipes
      p.recipes-info Please bear in mind 100% pasta based diet isn't recommended as a healthy nutrition style.
      <Recipes/>
</template>

<script lang="ts">
import Vue from 'vue';
import Form from '@/components/Form.vue';
import Recipes from '@/components/Recipes.vue';

export default Vue.extend({
  name: 'App',
  components: { Form, Recipes },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

* {
  box-sizing: border-box;
}

body{
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  background-color: antiquewhite;
}

.wrapper {
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  padding: 0 15px;

  @media screen and (min-width: 1024px){
    padding: 0;
  }
}

.recipes-info {
  text-align: center;
}

.title {
  font-weight: 300;
  font-size: 30px;
  text-align: center;
  margin-top: 40px;
  @media screen and (min-width: 1024px){
    font-size: 40px;
    margin-top: 60px;
  }
}

</style>
