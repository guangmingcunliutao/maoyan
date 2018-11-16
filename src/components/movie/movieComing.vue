<template>
    <app-content ref="content" :style="{top: '1.88rem'}">
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
            comingList: []
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
            mostExpected(this.ci).then((data)=> {
                // console.log('请求到了数据');
            });
        }
    },
    created(){
        this.initData();
    }
}
</script>

<style lang="scss" scoped>

</style>

