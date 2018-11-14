import head from './head/head'
import tabs from './tabs/tabs'
import tab from './tabs/tab'
import content from './content/content'

// 将公共部分的组件全部引入到这里，然后向外输出，在main的中使用vue的use方法调用

export default {
    install(Vue) {
        Vue.component(head.name, head);
        Vue.component(tabs.name, tabs);
        Vue.component(tab.name, tab);
        Vue.component(content.name, content);
    }
}