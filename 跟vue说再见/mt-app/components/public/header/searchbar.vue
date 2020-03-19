<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="6" class="left">
        <img src="@/assets/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="13" class="center">
        <div class="wrapper">
          <el-input v-model="search" placeholder="搜索商家或地点" @focus="focus" @blur="blur"/>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="5" class="right">
        <ul class="security">
          <li>
            <i class="refund">
              <p class="txt">随时退</p>
            </i>
          </li>
          <li>
            <i class="refund">
              <p class="txt">不满意免单</p>
            </i>
          </li>
          <li>
            <i class="refund">
              <p class="txt">过期退</p>
            </i>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      isFocus: false
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.search
    },
    isSearchList () {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      this.isFocus = false
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>
