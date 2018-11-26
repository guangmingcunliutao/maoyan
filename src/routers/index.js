import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入主要页面
import movie from '../pages/movie/movie'
// import cinema from '../pages/cinema/cinema'
import mine from '../pages/mine/mine'
import cityPage from '../pages/city/cityPage'
import buyMovie from '../pages/buyMovie/buyMovie'

export default new Router({
    mode: 'history',
    // 配置路由选项
    routes: [
        {
            path: '/movie',
            component: movie,
        },
        {
            path: '/buyMovie/:id',
            component: buyMovie
        },
        {
            path: '/cinema',
            // component: cinema,
            // 组件懒加载
            component: ()=>import ('../pages/cinema/cinema')
        },
        {
            path: '/search',
            component: ()=>import ('../pages/search/search')
        },
        {
            path: '/mine',
            component: mine
        },
        {
            path: '/cityPage',
            component: cityPage
        },
        // 重定向，一开重定向到默认显示的页面
        {
            path: '**',
            redirect: 'movie'
        }
    ]
})