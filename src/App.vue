<template>
  <CarSelector @carSelected="onCarSelected($event)"/>
  <ConfigurationSelector @configChanged="onConfigChanged($event)" v-bind:selectedCar="selectedCar"/>
  <ConfigurationSummary v-if="showSummary" v-bind:currentConfig="currentConfig" v-bind:totalPrice="totalPrice" v-bind:showSummary="showSummary"/>
</template>

<script>
import CarSelector from './components/CarSelector.vue'
import ConfigurationSelector from './components/ConfigurationSelector.vue'
import ConfigurationSummary from './components/ConfigurationSummary.vue'


export default {
  name: 'App',
  data() {
    return {
      selectedCar: "",
      currentConfig: "",
      totalPrice: 0,
      showSummary: "",
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
    },
    onConfigChanged(event) {
      this.currentConfig = event;
      this.calculateTotalPrice()
    },
    calculateTotalPrice(){
      if (this.currentConfig === ""){
        return      }
      var total = 0
      total += this.currentConfig.basePrice

      console.log(total)
      console.log(this.currentConfig.engine)

      if(this.currentConfig.engine){
        total+= this.currentConfig.engine.price
      }
      if (this.currentConfig.paintJob){
        total+= this.currentConfig.paintJob.price
      }
      if (this.currentConfig.rims){
        total += this.currentConfig.rims.price
      }
      this.totalPrice = total
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
