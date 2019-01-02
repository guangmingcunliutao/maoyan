<template>
    <div class="foot-menu">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabs',
    // 父级组件提供方法给子级组件使用
    provide() {
        return {
            handleTabAction: this.handleTabAction
        }
    },
    props: {
        value: Number
    },
    methods: {
        // 子组件可以触发这个事件
        handleTabAction(tabName){
            // 在这里可以访问slot里面的所有内容
            // console.log(this.$slots);

            // 这里获取所有虚拟节点
            let vnode = this.$slots.default;
            // console.log(vnode);

            // 对虚拟节点进行遍历，获取子组件对象，这里可以访问打子组件的所有内容
            let tabItem = vnode.map(item=>item.componentInstance);

            // 遍历子组件，改变其属性
            tabItem.map((item,index)=>{
                item.isActive = false;
                if(item.name == tabName){
                    // 在这里触发非父子组件传值的事件
                    this.$emit('input', index);
                }
            });
        }
    },
    mounted(){
        // 选中第0个
        this.$slots.default[0].componentInstance.isActive = true;
    }
}
</script>

<style lang="scss" scoped>
.foot-menu{
    width: 100%;
    height: .98rem;
    position: absolute;
    bottom: 0;
    display: flex;
    border-top: 1px solid #ccc;
    box-sizing: border-box;
}
</style>

