<template>
    <app-content :style="{top: '1.88rem'}">
        <div class="palying">
            <ul>
                <li v-for="item in palyingList" :key="item.id" class="item" @click="seeDetail">
                    <div class="item-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="item-content"></div>
                </li>
            </ul>
        </div>
    </app-content>
</template>

<script>
import {getPlayingList} from '../../services/movieService'
export default {
    data() {
        return {
            palyingList: []
        }
    },
    methods: {
        seeDetail(){
            console.log(1);
        }
    },
    created() {
        // 在这个钩子函数里面请求数据
        getPlayingList().then((data)=>{
            // console.log('请求成功');
            // 赋值数据
            this.palyingList = data;
        });
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
        border-bottom: 1px solid #ccc;
    }
}
</style>

