import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入主要页面
import movie from '../pages/movie/movie'
import cinema from '../pages/cinema/cinema'
import mine from '../pages/mine/mine'

export default new Router({
    mode: 'history',
    // 配置路由选项
    routes: [
        {
            path: '/movie',
            component: movie
        },
        {
            path: '/cinema',
            component: cinema
        },
        {
            path: '/mine',
            component: mine
        },
        // 重定向，一开重定向到默认显示的页面
        {
            path: '**',
            redirect: 'movie'
        }
    ]
})