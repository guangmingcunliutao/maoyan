<template>
	<div id="app">
		<!-- 保留组件状态 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<tabs v-model="selectIndex">
			<tab v-for="(tab,index) in tabList" :key="index" :name="tab.tabName"></tab>
		</tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectIndex: 0,
			tabList: [
				{tabName: '电影', path: '/movie'},
				{tabName: '影院', path: '/cinema'},
				{tabName: '我的', path: '/mine'}]
		}
	},
	watch: {
		// 监听selectIndex的变化
		selectIndex: {
			handler(newValue) {
				// 展示不同的页面，改变路由
				this.$router.push(this.tabList[newValue].path);
			}
		}
	}
}
</script>


<style lang="scss">
html,body,#app {
    width: 100%;
    height: 100%;
}
body {
    font-size: 0.4rem;
}
.page{
	width: 100%;
	position: absolute;
	top: 0;
	bottom: .98rem;
}
</style>
