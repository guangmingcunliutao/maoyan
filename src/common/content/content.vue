<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'app-content'
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

