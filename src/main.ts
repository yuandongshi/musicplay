import Vue from "vue";
import App from "./App.vue";
// 1.导入 2. use一下 3. 创建路由 4. 挂在到vue实例上去
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 导入全局初始化样式
import './assets/index.css'

// 导入 Element_ui 
import ElementUI from 'element-ui';
// 导入 Element-ui 样式
import 'element-ui/lib/theme-chalk/index.css';
// 插件 Element-ui
Vue.use(ElementUI);


// 导入所有需要进行导航的组件
import discovery from './views/discovery.vue';
//import playlists from './views/playlists.vue';
import songs from './views/songs.vue';
import mvs from './views/mvs.vue';
import result from './views/result.vue'
import playlist from './views/playlist.vue'
import mv from './views/mv.vue'

let router = new VueRouter({
  routes: [
    // 配置地址和组件的对应关系
    {
      //地址
      path: "/discovery",

      // 组件
      component: discovery
    },
    {
      // 推荐歌单
      path: "/playlists",

      // 组件
      component: ()=>import('./views/playlists.vue')
    },
    {
      //地址
      path: "/songs",

      // 组件
      component: songs
    },
    {
      //地址
      path: "/mvs",

      // 组件
      component: mvs
    },
    {
      //地址
      path: "/result",

      // 组件
      component: result
    },
    {
      //地址
      path: "/playlist",

      // 组件
      component: playlist
    },
    {
      //地址
      path: "/mv",

      // 组件
      component: mv
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 挂在到vue实例上
  router
}).$mount("#app");
