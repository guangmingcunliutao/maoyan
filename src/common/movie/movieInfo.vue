<template>
    <div class="movieInfo">
        <li :key="movieInfo.id" class="item" @click="seeDetail">
            <div class="item-img">
                <img :src="movieInfo.img" alt="">
            </div>
            <div class="item-content">
                <div class="content-left">
                    <div class="title">
                        <h3 class="title-name">{{movieInfo.nm}}</h3>
                        <span class="max3d" v-if="movieInfo.version == 'v3d imax'">
                            <img src="../../assets/3dmax.png" alt="">
                        </span>
                        <span class="3d" v-else-if="movieInfo.version == 'v3d'">
                            <img src="../../assets/3d.png" alt="">
                        </span>
                        <span class="max2d" v-else-if="movieInfo.version == 'v2d imax'">
                            <img src="../../assets/2dmax.png" alt="">
                        </span>
                    </div>
                    <div class="detailInfo">
                        <div class="score" v-if="movieInfo.sc != 0">
                            <span>观众评</span>
                            <span class="num">{{movieInfo.sc}}</span>
                        </div>
                        <div class="wish" v-else-if="movieInfo.sc == 0">
                            <span class="num">{{movieInfo.wish}}</span>
                            <span>人想看</span>
                        </div>
                        <div class="star line-ellipsis">主演：{{movieInfo.star}}</div>
                        <div class="showInfo line-ellipsis">{{movieInfo.showInfo}}</div>
                    </div>
                </div>
                <div class="content-right">
                    <div class="btn">
                        <span class="true" v-if="movieInfo.globalReleased">购票</span>
                        <span class="false" v-else-if="!movieInfo.globalReleased">预售</span>
                    </div>
                </div>
            </div>
        </li>
    </div>
</template>

<script>
export default {
    name: 'movie-info',
    props: {
        // 接受传递过来的数据对象，最终利用数据渲染
        movieInfo: Object
    },
    created() {
        // console.log(this.movieInfo);
    },
    methods: {
        // 将要实现的点击事件
        seeDetail(){
            console.log(1);
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    width: 100%;
    height: 2.28rem;
    padding: 0 .2rem;
    box-sizing: border-box;
    display: flex;
    .item-img{
        width: 1.12rem;
        height: 1.8rem;
        padding: .24rem 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .item-content{
        flex: 1;
        margin-left: .2rem;
        padding: .2rem .2rem .2rem 0;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        .content-left{
            width: 3.1rem;
            height: 1.92rem;
            .title{
                width: 3rem;
                height: .48rem;
                font-size: .28rem;
                display: flex;
                align-items: center;
                h3{
                    width: 2.08rem;
                    height: .48rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-weight: 600;
                    padding-right: .1rem;
                }
            }
            .detailInfo{
                font-size: .26rem;
                color: #666;
                .num{
                    color: #faaf00;
                    font-weight: 600;
                    font-size: .32rem;
                }
                .line-ellipsis{
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
        .content-right{
            width: .94rem;
            height: .54rem;
            font-size: .24rem;
            span{
                display: block;
                width: .94rem;
                height: .54rem;
                text-align: center;
                line-height: .54rem;
                color: white;
                border-radius: .1rem;
            }
            .true{
                background: red;
            }
            .false{
                background: #3c9fe6;
            }
        }
    }
}
</style>

