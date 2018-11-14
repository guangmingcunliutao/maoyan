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
    methods: {
        // 提供刷新滚动视图的方法，在外部引入组件的时候，只要在数据渲染完之后刷新滚动视图即可
        refresh(){
            console.log('刷新');
            this.contentScroll.refresh();
        }
    },
    mounted() {
        // 创建滚动视图
        // 提供dom对象
        // 将滚动视图绑定到this上面，有独立的作用域，方便访问
        this.contentScroll = new IScroll(this.$refs.content, {

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

