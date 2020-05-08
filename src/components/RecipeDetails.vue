<template lang="pug">
    div(class="recipe-details-container")
        div(class="wrapper recipe-details-wrapper")
            div(class="close" @click="$emit('setRecipeDetailsVisibility')")
            h1 {{recipe.title}}
            ul
                <Ingredient :ingredient="ingredient" v-for="ingredient in recipe.extendedIngredients"/>
            p {{recipe.instructions}}
</template>

<script lang="ts">
import Vue from 'vue';
import Ingredient from '@/components/Ingredient.vue';

export default Vue.extend({
  name: 'RecipeDetails',
  components: { Ingredient },
  props: ['recipe'],
});
</script>

<style lang="scss" scoped>
.recipe-details-container{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 35px;
    background-color: rgba(255,255,255,.5);
}

.recipe-details-wrapper{
    background-color: white;
    position: relative;
    max-height: 100vh;
    padding: 20px;
    text-align: left;
}

.close {
    position: absolute;
    padding: 20px;
    top: 0;
    cursor: pointer;
    right: 0px;

    &:before,
    &:after {
        position: absolute;
        content: '';
        display: block;
        width: 25px;
        height: 1px;
        background-color: black;
        left: 7px;
    }

    &:before{
        transform: rotate(45deg);
    }

    &:after{
        transform: rotate(-45deg);
    }

}
</style>
