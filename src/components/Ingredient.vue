<template lang="pug">
    li {{ingredient.original}}
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Ingredient',
  props: ['ingredient'],
});
</script>
