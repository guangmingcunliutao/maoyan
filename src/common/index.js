import head from './head/head'
import tabs from './tabs/tabs'
import tab from './tabs/tab'
import content from './content/content'
import movieInfo from './movie/movieInfo'
import city from './city/city'
import cinemainfo from './cinemaInfo/cinemaInfo'
import search from './search/search'
import FilterNav from './filternav/FilterNav'

// 将公共部分的组件全部引入到这里，然后向外输出，在main的中使用vue的use方法调用

export default {
    install(Vue) {
        Vue.component(head.name, head);
        Vue.component(tabs.name, tabs);
        Vue.component(tab.name, tab);
        Vue.component(content.name, content);
        Vue.component(movieInfo.name, movieInfo);
        Vue.component(city.name, city);
        Vue.component(cinemainfo.name, cinemainfo);
        Vue.component(search.name, search);
        Vue.component(FilterNav.name, FilterNav);
    }
}