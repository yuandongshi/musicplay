<template>
  <div id="app">
    <top />
    <index />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import top from "./components/top.vue";
import index from "./components/index.vue";
Vue.config.devtools = true;

@Component({
  components:{
    top,
    index
  }
})

export default class App extends Vue {}
</script>

<!--<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->
