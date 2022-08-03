<template>
  <view class="tab-bar">
    <view class="tab-bar-border"></view>
    <view v-for="(item, index) in list" :key="index" class="tab-bar-item" :path="item.pagePath" :index="index"
      @tap="switchTab(item.pagePath)">
      <img :src="selected === index ? item.selectedIconPath : item.iconPath" />
      <view :style="{ 'color': selected === index ? selectedColor : color }">{{ item.text }}</view>
      <view class="point" v-if="selected === index"></view>
    </view>
  </view>
</template>

<script>
export default {
  props:{
    selected:{
      type: Number,
      default:0
    }
  },
  data() {
    return {
      color: "#7A7E83",
      selectedColor: "#3CC51F",
      list: [{
        pagePath: "/pages/index/index",
        iconPath: "../static/images/tab/t1.png",
        selectedIconPath: "../static/images/tab/t1-c.png",
      },
      {
        pagePath: "/pages/cate/cate",
        iconPath: "../static/images/tab/t2.png",
        selectedIconPath: "../static/images/tab/t2-c.png",
      },
      {
        pagePath: "/pages/cart/cart",
        iconPath: "../static/images/tab/t3.png",
        selectedIconPath: "../static/images/tab/t3-c.png",
      },
      {
        pagePath: "/pages/mine/mine",
        iconPath: "../static/images/tab/t4.png",
        selectedIconPath: "../static/images/tab/t4-c.png",
      },
      ]
    }
  },
  onLoad() {

  },
  methods: {
    switchTab(pagePath) {
      const url = pagePath
      console.log(url);

      uni.switchTab({
        url
      })
    }
  }
}
</script>

<style>
.tab-bar {
  position: fixed;
  bottom: 40px;
  left: 32px;
  right: 32px;
  height: 56px;
  background: white;
  display: flex;
  padding-bottom: env(safe-area-inset-bottom);
  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 8px 0;
}

.tab-bar-border {
  /* background-color: rgba(0, 0, 0, 0.33);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5); */
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item img {
  width: 27px;
  height: 27px;
}

.tab-bar-item view {
  font-size: 10px;
}

.tab-bar-item .point {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #11C0CB;
  margin-top: 4px;
}
</style>
