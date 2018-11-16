<template>
    <div class="page" id="cityPage">
        <app-content ref="content" style="top: 0">
                <ul >
                    <li v-for="item in cityList" :key="item.key" ref="list">
                        <div class="city-title">{{item.key.toUpperCase()}}</div>
                        <ul class="city-list">
                            <li v-for="city in item.value" :ci="city.id" :key="city.id" @click="back(city.nm, city.id)">{{city.nm}}</li>
                        </ul>
                    </li>
                </ul>
        </app-content>
        <div class="letter">
            <ul>
                <li class="letter-item" v-for="(item, index) in key" :key="item" @click="goLetter(index)">
                    {{item.toUpperCase()}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getCityList } from '../../services/movieService';
export default {
    data() {
        return {
            cityList: [],
            key: []
        }
    },
    methods: {
        back(cityName, ci){
            this.$router.back();
            // console.log(cityName);
            this.$store.dispatch('cityAction', {
                cityName: cityName,
                ci: ci
            });
        },
        goLetter(index) {
            // this.$refs.content.refresh();
            let height = 0;
            for(var i = 0 ; i < this.$refs.list.length; i++){
                if(i < index){
                    height += this.$refs.list[i].offsetHeight;
                }else{
                    break;
                }
            }
            this.$refs.content.scrollTo(height);
        }
    },
    created() {
        // 初始化获取所有的城市数据
        getCityList().then(({key, data})=>{

            this.cityList = data;
            this.key = key;
            
            this.$nextTick(()=>{
                this.$refs.content.refresh();
            });
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
    .letter{
        position: absolute;
        color: #555;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        .letter-item{
            font-size: .28rem;
            padding: 0 .2rem;
        }
    }
}
</style>

