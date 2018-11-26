<template>
    <div id="search" class="page">
        <app-head title="猫眼电影">
            <span @click="goBack" class="goBack" slot="left"></span>
        </app-head>
        <div class="search-wrap">
            <div class="search-inp">
                <div class="inp-wrap">
                    <img src="//s0.meituan.net/bs/?f=my-canary:/deploy/images/search.png" alt="">
                    <input @input="inpChange" ref="input" type="text" placeholder="搜影院">
                    <img v-if="isShow" class="del-input" @click="delValue" src="//s0.meituan.net/bs/?f=my-canary:/deploy/images/close.png" alt="">
                </div>
                <span class="cancel" @click="goBack">取消</span>
            </div>
            <div v-if="noShow" class="noData">
                <img src="../../assets/nothingpng.png" alt="">
                <p>没有找到相关影院</p>
            </div>
            <div v-show="resultShow" class="search-result" ref="searchResultScroll">
                <div>
                    <cinemainfo v-for="cinemaItem in cinemaList" :key="cinemaItem.id" :cinemaItem="cinemaItem"></cinemainfo>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {getSearchData} from '../../services/cinemaService'


export default {
    data() {
        return {
            timer: null,
            isShow: false,
            resultShow: false,
            noShow: false,
            cinemaList: []
        }
    },
    computed: {
        ...mapState({
            ci: 'ci'
        })
    },
    methods: {
        goBack(){
            this.$router.back();
        },
        delValue(){
            this.cinemaList = [];
            this.$refs.input.value = '';
            this.isShow = false;
            this.resultShow = false;
            this.noShow = false;
            clearTimeout(this.timer);
        },
        inpChange(){
            clearTimeout(this.timer);
            this.isShow = false;
            this.resultShow = false;
            this.cinemaList = [];
            if(this.$refs.input.value !== ''){
                this.isShow = true;
                this.resultShow = true;
                this.timer = setTimeout(()=>{
                    getSearchData(this.$refs.input.value, this.ci).then((data)=>{
                        if(data){
                            console.log('有数据');
                            this.cinemaList = data.list;
                        }else if(!data){
                            console.log('没有数据');
                            this.resultShow = false;
                            this.noShow = true;
                        }
                        // console.log(data);
                    }).catch((error)=>{
                        console.log(error);
                    });
                },600);
            }
        },
        refresh() {
            this.resultScroll.refresh();
        }
    },
    updated() {
        this.resultScroll = new IScroll(this.$refs.searchResultScroll,{});
        this.resultScroll.on('beforeScrollStart', ()=>{
            this.resultScroll.refresh();
        });
    }
}
</script>

<style lang="scss" scoped>
#search{
    bottom: 0;
    background: white;
    z-index: 1;
}
.goBack{
    content: '';
    display: block;
    width: .3rem;
    height: .3rem;
    border: .05rem white solid;
    border-bottom: 0;
    border-right: 0;
    transform: rotate(-45deg);
    margin-top: .3rem;
}
.search-wrap{
    width: 100%;
    position: absolute;
    top: 1rem;
    bottom: 0;
    .search-inp{
        height: .88rem;
        padding: .1rem .2rem;
        box-sizing: border-box;
        background: #f5f5f5;
        display: flex;
        border-bottom: 1px solid #ccc;
        .inp-wrap{
            width: 4.5rem;
            height: .6rem;
            border: 1px solid #ccc;
            border-radius: .1rem;
            background: white;
            display: flex;
            align-items: center;
            padding: 0 .2rem;
            img{
                display: block;
                width: .3rem;
                height: .3rem;
                margin-right: .2rem;
            }
            input{
                height: .5rem;
                width: 3.8rem;
                border: 0;
                padding: .1rem 0;
                box-sizing: border-box;
                color: #333;
                font-size: .24rem;
            }
            ::-webkit-input-placeholder{
                font-size: .24rem;
            }
        }
        .cancel{
            height: .6rem;
            font-size: .28rem;
            color: #f03d37;
            padding: 0 .2rem;
            line-height: .6rem;
        }
    }
    .search-result{
        width: 100%;
        position: absolute;
        top: .88rem;
        bottom: 0;
        overflow: hidden;
    }
}
.noData{
    width: 100%;
    position: absolute;
    top: .88rem;
    bottom: 0;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 1.74rem;
        height: 2rem;
        margin-bottom: .2rem;
    }
    p{
        font-size: .32rem;
        color: #999;
    }
}
</style>

