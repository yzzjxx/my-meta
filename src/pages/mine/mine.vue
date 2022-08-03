<template>
	<view class="content">
		<view class="area-1">
			<view class="banner"></view>
			<view class="icon iconfont icon-shezhi-bai"></view>
			<view class="icon iconfont icon-xiaoxi-bai">
				<view class="point"></view>
			</view>
			<view class="avatar">
				<image src="../../static/images/tx1.jpg" alt=""></image>
			</view>
			<view class="name">MYMETA</view>

			<view class="nums">
				<view class="num cangpin">
					<span>23</span>
					<span>藏品数量</span>
				</view>
				<view class="num yuer">
					<span>￥0</span>
					<span>余额</span>
				</view>
			</view>
		</view>
		<view class="area-2">
			<view class="navbar">
				<view class="nav-item"></view>
				<view class="nav-item"></view>
			</view>
			<view class="list">
				<view class="list-item"></view>
			</view>
		</view>
		<tab-bar :selected="3"></tab-bar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '1'
		}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style lang="scss">
@import '@/static/css/variable.scss';
$bgPath: '../../static/images/';

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.area-1 {
		width: 750rpx;
		height: 850rpx;
		background-color: #fff;
		border-radius: 0 50rpx 50rpx 0;
		box-shadow: 8px 1px 10px 10px #f1f1f1;
		position: relative;

		.banner {
			width: 750rpx;
			height: 478rpx;
			@include bgt('//www1.pconline.com.cn/zt/gz20200803/picture/banner.png');
		}

		.icon {
			font-size: 48rpx;
			position: absolute;
			top: 40rpx;
			right: 40rpx;
			color: #fff;

			&.icon-xiaoxi-bai {
				.point {
					width: 10rpx;
					height: 10rpx;
					background-color: #F96900;
					border: 1px solid #fff;
					border-radius: 50%;
					position: absolute;
					right: 6rpx;
					top: 2rpx;
				}
			}

			&.icon-shezhi-bai {
				right: 120rpx;
			}
		}

		.avatar {
			width: 200rpx;
			height: 200rpx;
			border: 5px solid #fff;
			border-radius: 50%;
			overflow: hidden;
			position: absolute;
			top: 370rpx;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			image {
				width: 100%;
				height: 100%;
			}
		}

		.name {
			position: absolute;
			width: 300rpx;
			height: 48rpx;
			line-height: 48rpx;
			text-align: center;
			top: 600rpx;
			left: 50%;
			transform: translateX(-50%);
			font-weight: 600;
		}

		.nums {
			width: 600rpx;
			height: 120rpx;
			position: absolute;
			top: 680rpx;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			justify-items: space-between;

			.num {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				span:first-child {
					font-size: 42rpx;
					font-weight: 600;
				}
			}
		}
	}
}
</style>
