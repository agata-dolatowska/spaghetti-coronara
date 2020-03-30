<template lang="pug">
    div(@input="countDays")
      h1.form-result You have pasta for {{days}} days
      div.form-wrapper
        div.form-item-wrapper
          label(for="packages") Amount of pasta (packages) - {{packages}}
          input(id="packages" type="range" min="1" max="300" v-model="packages")
        div.form-item-wrapper
          label(for="familyMembers") Family members - {{familyMembers}}
          input(id="familyMembers" type="range" min="1" max="15" v-model="familyMembers")
        div.form-item-wrapper
          label(for="pastaKcal") kcal/100g - {{pastaKcal}}
          input(id="pastaKcal" type="range" min="200" max="500" v-model="pastaKcal")
        div.form-item-wrapper
          label(for="kcalIntake") kcal intake/person - {{kcalIntake}}
          input(id="kcalIntake" type="range" min="1200" max="3500" v-model="kcalIntake")
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Form',
  data() {
    return {
      days: 0,
      packages: 100,
      familyMembers: 1,
      pastaKcal: 350,
      kcalIntake: 2000,
      pastaWeight: 5,
    };
  },
  methods: {
    countDays(): number {
      const pastaKcalSum: number = this.packages * this.pastaKcal * this.pastaWeight;
      const familyKcalIntake: number = this.kcalIntake * this.familyMembers;
      this.days = Math.floor(pastaKcalSum / familyKcalIntake);
      return this.days;
    },
  },
  mounted() {
    this.countDays();
  },
});
</script>

<style lang="scss" scoped>
.form-result {
  font-weight: 300;
  font-size: 30px;
  text-align: center;
  @media screen and (min-width: 1024px){
    font-size: 45px;
  }
}

.form-wrapper{
  width: 100%;
  padding: 0 15px;

  @media screen and (min-width: 1024px){
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.form-item-wrapper{
  width: 100%;

  &+.form-item-wrapper{
    margin-top: 10px;
  }
}

input[type="range"]{
  width: 100%;
  margin: 0;
  -webkit-appearance: none;
  background: transparent;
  margin: 5px 0;
  outline: none;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 15px;
  background-color: gray;
  margin-top: -4px;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 7px;
  background-color: lightgray;
  border-radius: 5px;
}

</style>
