import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建store对象
let store = new Vuex.Store({
	// state：存放全局数据
	state: {
		city: '深圳'
	},
	// getter：存放全局计算属性
	getters: {

	},
	// mutations：更新state数据
	mutations: {
		// state：文件内部的state
		// params：传入的参数
		setCity(state, params) {
			// console.log(state, params);
			state.city = params;
		}
	},
	// actions：事件处理，外部通过调用$store对象，来访问actions里面的事件，actions事件通过访问commit触发mutations的方法来更新state的数据
	actions: {
		// context：代表上下文
		// params：传入的参数
		cityAction(context, params) {
			context.commit('setCity', params);
		}
	}
});

export default store;