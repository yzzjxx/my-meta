<template>
  <view class="content">
    <view class="navbar">
      <view v-for="(item,index) in navbarList" 
      :key="item" 
      class="nav-bar" 
      :class="{'active':index===currentIndex}"
      @tap="navbarTap()">
        {{ item }}
      </view>
    </view>
    <view class="list">
      <view 
      class="list-item"
      v-for="(item,index) in currentList"
      :key="index">
        <image src="../../static/images/tx1.jpg" alt=""></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    currentIndex: {
      type: Number,
      default: 0
    },
    navbarList:{
      type: Array,
      default: []
    },
    currentList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {

    }
  },
  onLoad() {

  },
  methods: {

  }
}
</script>

<style lang="scss">
</style>
