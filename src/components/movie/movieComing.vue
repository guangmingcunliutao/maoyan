<template>
    <app-content :style="{top: '1.88rem'}">
        <div class="coming">
            <div>
                <!-- 循环对象,list：属性值，key：属性 -->
                <div v-for="(list, key) in comingList" :key="list.id">
                    <h3>{{key}}</h3>
                    <ul>
                        <!-- <li class="comingTtile" v-for="item in list">{{item.nm}}</li> -->
                        <movie-info v-for="item in list" :movieInfo="item"></movie-info>
                    </ul>
                </div>
            </div>
        </div>
    </app-content>
</template>

<script>
import {getComingList} from '../../services/movieService'
export default {
    data() {
        return {
            comingList: []
        }
    },
    created(){
        getComingList().then((data)=>{
            // console.log('请求成功');
            this.comingList = data;
            // console.log(this.comingList);
        });
    }
}
</script>

<style lang="scss" scoped>

</style>

