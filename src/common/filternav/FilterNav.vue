<template>
    <div class="filter-nav">
        <div class="tabs">
            <div class="tab" :class="{selected: selecting == tab}" @click="selectTab(tab)" v-for="(tab, index) in tabs" :key="index">{{tab}}</div>
        </div>
        <div class="close-tab">
            <div v-show="selecting == '全城'">
                商城
            </div>
            <div v-show="selecting == '品牌'">
                品牌
            </div>
            <div v-show="selecting == '特色'">
                特色
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filter-nav',
    data() {
        return {
            selecting: '',
            tabs: ['全城', '品牌', '特色']
        }
    },
    props:{
        isBlacker: Boolean
    },
    watch: {
        isBlacker() {
            if(this.isBlacker == false){
                this.selecting = '';
            }
        }
    },
    methods: {
        selectTab(tab){
            if(this.selecting == tab){
                this.selecting = '';
            }else if(this.selecting != tab) {
                this.selecting = tab;
            }
            this.$emit('changeIsBlacker', this.selecting);
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-nav{
    width: 100%;
    height: .8rem;
    position: absolute;
    top: 1.88rem;
    border-bottom: 2px solid #e8e8e8;
    box-sizing: border-box;
    background: white;
    z-index: 4;
}
.tabs{
    height: .8rem;
    display: flex;
    .tab{
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        font-size: .24rem;
        color: #999;
        flex: 1;
        position: relative;
        &::before{
            content: '';
            display: block;
            height: .4rem;
            border-left: 1px solid #ccc;
            position: absolute;
            top: .2rem;
            left: 0;
        }
        &::after{
            content: '';
            display: block;
            border: .1rem solid transparent;
            border-top: .1rem solid #ccc;
            position: absolute;
            top: .3rem;
            right: .5rem;
        }
    }
    .selected{
        color: red;
    }
    .selected::after{
        border-top: .1rem solid red;
        top: .2rem;
        transform: rotate(180deg);
    }
    .tab:nth-of-type(1)::before{
        height: 0;
    }
}
.close-tab{
    width: 100%;
    background: white;
    position: absolute;
    top: .8rem;
    z-index: 99999;
}
</style>

