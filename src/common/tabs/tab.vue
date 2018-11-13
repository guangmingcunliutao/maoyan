<template>
    <li class="tab" :class="{active: isActive}" @click="tabAction">
        <span class="icon">☆</span>
        <span>{{name}}</span>
    </li>
</template>

<script>
export default {
    name: 'tab',
    // 获取到传递过来的值
    props: {
        name: String
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        // 点击触发事件
        tabAction() {
            // 在这里可以获取到父级元素的vue组件对象，所以在这里可以访问到父级元素组件里面的事件以及属性
            // console.log(this.$parent);
            this.$parent.handleTabAction(this.name);
            // 改变状态
            this.isActive = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.tab{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: .24rem;
    text-align: center;
    span:nth-of-type(1) {
        font-size: .48rem;
    }
    &.active{
        color: #f03d37;
    }
}
</style>
