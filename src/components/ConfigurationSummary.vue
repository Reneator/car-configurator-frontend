<template>
  <div class="summary">
      Summary
      <div v-if="currentConfig.engine">
       Motor: {{ currentConfig.engine.name }} + {{ currentConfig.engine.price }} Euro
      </div>
      <div v-if="currentConfig.paintJob">
       Lackierung: {{ currentConfig.paintJob.name }} + {{ currentConfig.paintJob.price }} Euro
      </div>
      <div v-if="currentConfig.rims">
       Motor: {{ currentConfig.rims.name }} + {{ currentConfig.rims.price }} Euro
      </div>
      <div> {{ totalPrice }}</div>
      <button @click="confirmPurchase()">Kauf bestätigen!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ["currentConfig","totalPrice"],
  methods: {
    confirmPurchase(){
      var payload = {dateTime:Date.now(),configuration:this.currentConfig}
      this.axios.post("http://157.90.116.81:8081/carconfigurator/orders/",payload).then((response) => {
        console.log(response)
    });
    }
  }
}
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
