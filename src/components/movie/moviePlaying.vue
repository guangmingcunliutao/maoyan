<template>
    <app-content ref="content" :style="{top: '1.88rem'}">
        <div class="palying">
            <ul>
                <!-- 抽取每一个电影的详细信息，成为一个组件，传入组件需要的数据对象 -->
                <movie-info v-for="palyingMovie in palyingList" :movieInfo="palyingMovie" :key="palyingMovie.id"></movie-info>
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
        
    },
    created() {
        // 在这个钩子函数里面请求数据
        getPlayingList().then((data)=>{
            // console.log('请求成功');
            // 赋值数据
            this.palyingList = data;
            console.log(this.palyingList);

            // 成功请求到数据，数据发生变化，高度随之改变，需要刷新滚动视图
            // this.$nextTick：在数据重新渲染之后再执行，得到的是数据渲染完成，更新之后的dom
            this.$nextTick(()=>{
                this.$refs.content.refresh();
            });
        });
    }
}
</script>

<style lang="scss" scoped>

</style>

