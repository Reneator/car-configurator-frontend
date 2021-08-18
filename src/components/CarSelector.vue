<template>
  <div class="CarSelector">
    CarSelector Car selections:
    <button @click="getList">get api data</button>
    <div>{{ selector_data }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api: "http://157.90.116.81:8081/carconfigurator/configs/",
      response_data: "",
      selector_data: [],
    };
  },
  props: {
    msg: String,
  },
  created() {
    this.axios.get(this.api + "all").then((response) => {
      this.response_data = response.data;
        this.response_data.forEach((element) => {
        this.selector_data.push(element.name);
      });
      
    });
  },
  methods: {
    getList() {
      var array = [];
      this.response_data.forEach((element) => {
        console.log(element.name);
        array.push(element.name);})
    },
  },
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
