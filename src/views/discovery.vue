<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel class="" :interval="4000" type="card">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">
        推荐歌单
      </h3>
      <div class="items">
        <div class="item" v-for="item in playlists" :key="item.id">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.copywriter }}</span>
            </div>
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">
        最新音乐
      </h3>
      <div class="items">
        <div class="item" v-for="item in songs" :key='item.id'>
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <div class="song-wrap">
            <div class="song-name">{{item.name}}</div>
            <div class="singer">{{item.song.artists[0].name}}</div>
          </div>
        </div>
        </div>
        
    </div>
    <!-- 推荐MV -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div class="item" v-for="item in mvs" :key='item.id'>
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{item.playCount}}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{item.copywriter}}</div>
            <div class="singer">{{item.artists[0].artistName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({
  components: {
    discovery
  }
})
export default class discovery extends Vue {
  // 轮播条 数据
  banners: any[] = [];
  // banners!: any[]
  // 这种写法会导致一个问题：Property or method "banners" is not defined on the instance but referenced during render. 可以想想是为什么

  // 推荐歌单
  playlists: any[] = [];
  // 最新音乐
  songs: any[] = [];
  // 推荐MV
  mvs: any[] = [];

  // 组件初始化的会调用
  created() {
    this.getBanners();
    this.getPlaylists();
    this.getnewsongs();
    this.getMvs();
  }

  getBanners(): void {
    axios({
      url: "https://autumnfish.cn/banner",
      method: "get"
    }).then(res => {
      // console.log(res);
      this.banners = res.data.banners;
    });
  }

  getPlaylists() {
    axios({
      url: "https://autumnfish.cn/personalized",
      method: "get",
      params: {
        limit: 10
      }
    }).then(res => {
      //console.log(res);
      this.playlists = res.data.result;
    });
  }

  getnewsongs() {
    axios({
      url: "https://autumnfish.cn/personalized/newsong",
      method: "get",
      params: {}
    }).then(res => {
      //console.log(res);
      this.songs=res.data.result;
    });
  }

  getMvs(){
    axios({
      url:'https://autumnfish.cn/personalized/mv',
      method:'get',
      params:''
    }).then(
      res=>{
        console.log(res);
        this.mvs=res.data.result;
      }
    );
  }
}
</script>

<style></style>
