<template>
    <div class="head">
        <span class="head-btn head-btn-left">
            <slot name="left"></slot>
        </span>
        <h1>{{title}}</h1>
        <span class="head-btn head-btn-right">
            <slot name="right"></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: 'app-head',
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
.head{
	width: 100%;
    height: 1rem;
    position: absolute;
    top: 0;
    color: white;
    background: #e54847;
    h1{
        margin: 0;
        padding: 0;
        text-align: center;
        line-height: 1rem;
        font-size: .36rem;
    }
    .head-btn{
        height: 1rem;
        line-height: 1rem;
        font-size: .24rem;
        padding: 0 .2rem;
        position: absolute;
    }
    .head-btn-left{
        left: .2rem;
    }
    .head-btn-right{
        top: 0;
        right: .2rem;
    }
}
</style>

