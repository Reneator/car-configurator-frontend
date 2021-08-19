<template>
  <div class="ConfigurationSelector" v-if="selectedCar">
    <div>
    Motor:
      <select v-model="selectedEngine" @change="configChanged()" v-if="engines">
        <option
          v-for="engine in engines"
          :key="engine.name"
          v-bind:value="engine"
          >{{ engine.name }}PS +{{ engine.price }} Euro</option
        >
    </select>
    </div>
    <div>
    Lackierung:
      <select v-model="selectedPaintJob" @change="configChanged()" v-if="paintjobs">
        <option
          v-for="paintjob in paintjobs"
          :key="paintjob.name"
          v-bind:value="paintjob"
          >{{ paintjob.name }} +{{ paintjob.price }} Euro</option
        >
    </select>
    </div>
        <div>
    Felgen:
      <select v-model="selectedRims" @change="configChanged()" v-if="rims">
        <option
          v-for="rim in rims"
          :key="rim.name"
          v-bind:value="rim"
          >{{ rim.name }} +{{ rim.price }} Euro</option
        >
    </select>
    </div>



  </div> 
</template>

<script>
export default {
  name: "ConfigurationSelector",
  props: ["selectedCar"],
  emits: ['configChanged'],
  data() {
    return{
      engines: "",
      paintjobs: [],
      rims: [],
      selectedEngine: "",
      selectedPaintJob: "",
      selectedRims: "",
      extras: "",

    }
  },
  watch: {
    selectedCar: function(newVal) {
      console.log("Car selected")
      console.log(newVal)
      this.engines = newVal.engine;
      this.paintjobs = newVal.paintjob;
      this.rims = newVal.rims;
    },
  },
    methods: {
    configChanged(){
      var config = {"id":this.selectedCar.id, "name":this.selectedCar.name,"engine":this.selectedEngine,"rims": this.selectedRims,"paintJob":this.selectedPaintJob, "extras":this.extras}
      console.log(config)
      this.$emit("configChanged",config)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
