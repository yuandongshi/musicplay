<template>
  <div class="playlists-container">
    <!-- 同步 -->
    <div class="top-card">
      <div class="icon-wrap">
        <img :src="highqualitySong.coverImgUrl" alt="" />
      </div>
      <div class="content-wrap">
        <div class="tag">精品歌单</div>
        <div class="title">
          {{highqualitySong.name}}
        </div>
        <div class="info">
          {{highqualitySong.description}}
        </div>
      </div>
      <img src="../assets/listCover.jpg" alt="" class="bg" />
      <div class="bg-mask"></div>
    </div>
    <div class="tab-container">
      <!-- tab栏 顶部 -->
      <div class="tab-bar">
        <span class="item" v-for="(item,index) in catagory" :key='index' :class="{active:item==currentcat}" @click="refreshTag(item)">{{item}}</span>
      </div>
      <!-- tab的内容区域 -->
      <div class="tab-content">
        <div class="items">
          <div class="item" v-for="item in playlist" :key='item.id'>
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{item.playCount}}</span>
              </div>
              <img :src="item.coverImgUrl" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{item.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页器 -->
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      :page-size='pagesize'
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({
  components: {
    playlists
  }
})

export default class playlists extends Vue {
  total = 0;
  // 页码
  page = 1;
  pagesize=10

  // 当前分组
  currentcat:string='全部';
  highqualitySong:any='';

  // 全部分组
  catagory:string[]=['全部','欧美','华语','流行','说唱','摇滚','民谣','电子','轻音乐','影视原声','ACG','怀旧','治愈','旅行'];

  playlist:any[]=[];

  created() {
    this.gethighqualitysong();
    this.getpalylists();
  }

  refreshTag(tag:string)
  {
    this.currentcat=tag;
    this.page=1;
    this.gethighqualitysong();
    this.getpalylists();
  }

  handleCurrentChange(val: number) {
    this.page=val;
    //console.log(`当前页: ${val}`);
    this.getpalylists();
  }

  gethighqualitysong():void {
    axios({
      url: "https://autumnfish.cn/top/playlist/highquality",
      method: "get",
      params: {
        limit:1,
        cat:this.currentcat
      }
    }).then(res => {
     // console.log(res);
     this.highqualitySong=res.data.playlists[0];
    });
  }

  getpalylists():void
  {
    axios({
      url:'https://autumnfish.cn/top/playlist/',
      method:'get',
      params:{
        limit:this.pagesize,
        offset:(this.page-1)*this.pagesize,
        cat:this.currentcat
      }
    }).then(
      res=>{
     //console.log(res)
      this.playlist=res.data.playlists;
      this.total=res.data.total;
      }
    );
  }
}
</script>

<style></style>
