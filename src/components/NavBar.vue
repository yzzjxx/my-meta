<template>
  <view class="content">
    <view class="navbar">
      <view v-for="(item, index) in navbarList" :key="item" class="nav-bar"
        :class="{ 'active': index === currentIndex }" @tap="navbarTap(index)">
        {{ item }}
      </view>
    </view>
    <view class="list">
      <view class="list-item" v-for="(item, index) in currentList" :key="index">
        <image :src="item.img" class="chanping" alt=""></image>
        <view class="xinxi">
          <view class="tit">{{ item.tit }}</view>
          <view class="price">{{ item.price }}</view>
          <view class="owner">
            <image :src="item.avatar" alt=""></image>
            {{ item.owner }}
          </view>
        </view>
      </view>
      <view class="list-item" v-if="currentList.length%2==1"></view>
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
    navbarList: {
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
    navbarTap(i) {
      this.$emit('changeFunc', i)
    }
  }
}
</script>
<style lang="scss">




@import '@/static/css/variable.scss';
$bgPath: '../../static/images/';

.content {
  .navbar {
    width: 750rpx;
    display: flex;
    justify-content: space-around;
    margin-bottom: 38.462rpx;

    .nav-bar {
      font-size: 30.769rpx;
      line-height: 80.769rpx;
      font-size: 34.615rpx;
      font-weight: 600;

      &.active {
        border-bottom: 5.769rpx solid #11C0CB;
      }
    }
  }

  .list {
    width: 750rpx;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .list-item {
      width: 311.538rpx;
      height: 326.923rpx;
      border-radius: 19.231rpx;
      position: relative;
      margin-bottom: 30.769rpx;

      .chanping {
        width: 294.231rpx;
        height: 292.308rpx;
        position: absolute;
        right: 0;
        border-radius: 19.231rpx;
      }

      .xinxi {
        width: 311.538rpx;
        height: 107.692rpx;
        @include bgt('//www1.pconline.com.cn/zt/gz20200803/picture/bg.png');
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        font-size: 26.923rpx;

        .tit {
          width: 100%;
          text-indent: 38.462rpx;
          height: 50rpx;
          line-height: 50rpx;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .price {
          width: 96.154rpx;
          height: 38.462rpx;
          line-height: 38.462rpx;
          font-size: 23.077rpx;
          border-radius: 26.923rpx;
          overflow: hidden;
          background-color: #320D6D;
          color: #fff;
          text-align: center;
        }

        .owner {
          width: 152.308rpx;
          height: 38.462rpx;
          background-color: #f0f0f0;
          border-radius: 38.462rpx;
          font-size: 23.077rpx;
          display: flex;
          align-items: center;

          image {
            width: 30.769rpx;
            height: 30.769rpx;
            overflow: hidden;
            border-radius: 50%;
            margin-right: 7.692rpx;
          }

          .name {}
        }
      }
    }
  }
}
</style>
