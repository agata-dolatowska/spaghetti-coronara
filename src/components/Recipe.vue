<template lang="pug">
    li.recipe-wrapper
        img(v-bind:src="recipe.image" class="recipe-img")
        p.recipe-title {{recipe.title}}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Recipe',
  props: ['recipe'],
});
</script>

<style lang="scss" scoped>
.recipe-wrapper {
  cursor: pointer;
}

.recipe-title {
  text-align: center;
}

.recipe-img {
  width: 100%;
  transition: opacity .5s;
  &:hover {
    opacity: .6;
  }
}
</style>
