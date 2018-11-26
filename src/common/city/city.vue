<template>
    <div class="city">
        <span class="city-name" @click="changeCity">{{$store.state.city}}</span>
    </div>
</template>

<script>
export default {
    name: 'city',
    methods: {
        changeCity(){
            this.$router.push('/cityPage');
            // this.$store.dispatch('cityAction', '北京');
        }
    }
}
</script>

<style lang="scss" scoped>
.city {
    width: 1.8rem;
    height: .88rem;
    box-sizing: border-box;
    padding-left: .2rem;
    .city-name{
        display: block;
        height: .88rem;
        font-size: .28rem;
        line-height: .88rem;
        &::after{
            content: '';
            display: inline-block;
            width: 0;
            height: 0;
            border: .12rem solid transparent;
            border-top: .12rem solid #666;
            transform: translateY(3px);
        }
    }
    
}
</style>

