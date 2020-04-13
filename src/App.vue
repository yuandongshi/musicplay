<template>
  <div id="app">
    <top />
    <index />
  </div>
</template>

<script lang="ts">
// import {Vue, Component} from "vue-property-decorator";效果一致
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import axios from "axios";

import top from "./components/top.vue";
import index from "./components/index.vue";
Vue.config.devtools = true;

// @Component 修饰符注明了此类为一个 Vue 组件
// 没有@Component修饰符不行 会出现一个很奇怪的路由没有用的情况
@Component({
  components: {
    top,
    index
  }
})
export default class App extends Vue {
  // 初始化 组件一开始就会被调用
  }
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
