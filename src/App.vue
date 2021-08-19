<template>
  <CarSelector @carSelected="onCarSelected($event)"/>
  <ConfigurationSelector v-bind:selectedCar="selectedCar"/>
  <ConfigurationSummary/>
</template>

<script>
import CarSelector from './components/CarSelector.vue'
import ConfigurationSelector from './components/ConfigurationSelector.vue'
import ConfigurationSummary from './components/ConfigurationSummary.vue'


export default {
  name: 'App',
  data() {
    return {
      selectedCar: ""
    }
  },
  components: {
    CarSelector,
    ConfigurationSelector,
    ConfigurationSummary
  },
  methods: {
    onCarSelected(event) {
      this.selectedCar = event;
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
