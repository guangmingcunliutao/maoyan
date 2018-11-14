<template>
    <div class="content" ref="content">
        <div class="scrollWrap">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-content',
    props: {
        // 接受传递进来的参数
        canLoadMore: Boolean
    },
    methods: {
        // 提供刷新滚动视图的方法，在外部引入组件的时候，只要在数据渲染完之后刷新滚动视图即可
        refresh(){
            // console.log('刷新');
            this.contentScroll.refresh();
        }
    },
    mounted() {
        // 创建滚动视图
        // 提供dom对象
        // 将滚动视图绑定到this上面，有独立的作用域，方便访问
        this.contentScroll = new IScroll(this.$refs.content, {
            mouseWheel: true
        });
        // 点击界面刷新滚动视图，也可以利用nextTick方法，在数据渲染完成之后再刷新滚动视图
        /* this.contentScroll.on('beforeScrollStart', ()=>{
            this.contentScroll.refresh();
        }); */
        this.contentScroll.on('scrollEnd', ()=>{
            
            // 判断到达了底部，并且可以允许刷新再执行
            if((this.contentScroll.y <= this.contentScroll.maxScrollY) && this.canLoadMore){
                console.log('请求刷新');
                // 触发父组件的方法
                this.$emit('loadmore');
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.content{
    width: 100%;
    position: absolute;
    top: 1rem;
    bottom: 0;
    overflow: hidden;
}
.content.no-head{
    top: 0;
}
</style>

