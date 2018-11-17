<template>
    <app-content ref="content" :style="{top: '1.88rem'}">

        <div class="most-expected">
            <div>
                <p class="title">近期最受期待</p>
                <div class="most-expected-list" ref="expectedSroll">
                    <ul class="wrap" :style="{width: wrapwidth}">
                        <li class="expected-item" ref="expecteditem" v-for="item in mostExpected" :key="item.id" :data-id="item.id">
                            <div class="item-img">
                                <img :src="item.img" alt="">
                                <p class="wish-bg"></p>
                                <p class="wish"><span>{{item.wish}}</span><span>想看</span></p>
                            </div>
                            <h5 class="name">{{item.nm}}</h5>
                            <!-- 正则匹配，去除后面的星期 -->
                            <p class="date">{{item.comingTitle.match(/.+\s{1}/)[0]}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="coming">
            <div>
                <!-- 循环对象,list：属性值，key：属性 -->
                <div v-for="(list, key) in comingList" :key="list.id">
                    <h3>{{key}}</h3>
                    <ul>
                        <!-- <li class="comingTtile" v-for="item in list">{{item.nm}}</li> -->
                        <movie-info v-for="item in list" :movieInfo="item" :key="item.id"></movie-info>
                    </ul>
                </div>
            </div>
        </div>

    </app-content>
</template>

<script>
import {getComingList, mostExpected} from '../../services/movieService'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            comingList: {},
            mostExpected: [],
            wrapwidth: 0
        }
    },
    computed: {
        ...mapState({
            ci: 'ci'
        })
    },
    watch: {
        ci(){
            this.initData();
        }
    },
    methods: {
        initData() {
                // 初始化获取即将上映电影的数据
            getComingList(this.ci).then((data)=>{
                // console.log('请求成功');
                this.comingList = data;
                // console.log(this.comingList);

                // 成功请求到数据，数据发生变化，高度随之改变，需要刷新滚动视图
                // this.$nextTick：在数据重新渲染之后再执行，得到的是数据渲染完成，更新之后的dom
                this.$nextTick(()=>{
                    this.$refs.content.refresh();
                });
            });
            // 获取最受欢迎数据
            mostExpected(this.ci).then((data)=> {
                this.mostExpected = data;
            });
        }
    },
    created(){
        this.initData();
    },
    mounted() {
        // console.log(this.$refs.expectedSroll);
        this.expectedSroll = new IScroll(this.$refs.expectedSroll, {
            scrollX: true
        });
        this.expectedSroll.on('beforeScrollStart', ()=>{
            let width = 0;
            this.$refs.expecteditem.map(item=>{
                width += item.offsetWidth;
            });
            console.log(width);
            this.wrapwidth = width + 'px';
            this.$nextTick(()=>{
                this.expectedSroll.refresh();
            });
        });
    }
}
</script>

<style lang="scss" scoped>
.coming{
    border-top: .2rem solid #f5f5f5;
}
.most-expected{
    padding: .24rem .3rem;
    background-color: #fff;
    margin-bottom: 10px;
    .title{
        font-size: .28rem;
        margin: 0 0 .24rem;
        color: #333;
    }
    .most-expected-list{
        overflow: hidden;
        white-space: nowrap;
        .wrap{
            .expected-item{
                width: 1.7rem;
                height: 3.12rem;
                display: inline-block;
                overflow: hidden;
                padding-right: .2rem;
            }
        }
    }
}
.item-img{
    width: 1.7rem;
    height: 2.3rem;
    position: relative;
    margin-bottom: .12rem;
    img{
        width: 100%;
        height: 100%;
    }
    .wish-bg{
        width: 100%;
        height: .7rem;
        position: absolute;
        bottom: 0;
        background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
    }
    .wish{
        position: absolute;
        left: .08rem;
        bottom: 0;
        color: #faaf00;
        font-size: .24rem;
        font-weight: 600;
    }
}
.name{
    margin: 0 0 .06rem;
    font-size: .26rem;
    color: #222;
}
.date{
    font-size: .24rem;
    color: #999;
}
</style>

