<template>
    <div class="page" id="cityPage">
        <ul >
            <li v-for="(city,key) in cityList" :key="key">
                <div class="city-title">{{key.toLocaleUpperCase()}}</div>
                <ul class="city-list">
                    <li v-for="(item, index) in city" :ci="item.id" :key="index" @click="back(item.nm)">{{item.nm}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import { getCityList } from '../../services/movieService';
export default {
    data() {
        return {
            cityList: {}
        }
    },
    methods: {
        back(cityName){
            this.$router.back();
            // console.log(cityName);
            this.$store.dispatch('cityAction', cityName);
        }
    },
    created() {
        // 初始化获取所有的城市数据
        getCityList().then((data)=>{

            this.cityList = data;
            // console.log(this.cityList);
            
        });
    }
}
</script>

<style lang="scss" scoped>
#cityPage{
    height: 100%;
    overflow: auto;
    background: #ebebeb;
    z-index: 1;
    .city-title{
        padding-left: .5rem;
    }
    .city-list{
        background-color: #f5f5f5;
        li{
            height: .88rem;
            line-height: .88rem;
            margin-left: .3rem;
            border-bottom: 1px solid #c8c7cc
        }
    }
}
</style>

