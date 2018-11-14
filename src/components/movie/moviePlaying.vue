<template>
    <app-content ref="content" :style="{top: '1.88rem'}" @loadmore="getMoreData">
        <div class="palying">
            <ul>
                <!-- 抽取每一个电影的详细信息，成为一个组件，传入组件需要的数据对象 -->
                <movie-info v-for="playingMovie in playingList" :movieInfo="playingMovie" :key="playingMovie.id"></movie-info>
            </ul>
        </div>
    </app-content>
</template>

<script>
import {getPlayingList, getMoreDataList} from '../../services/movieService'
export default {
    data() {
        return {
            playingList: [],
            playingMovieIds: []
        }
    },
    methods: {
        // 自定义方法，子组件触发
        getMoreData(){
            // 请求下一页的数据
            // 深拷贝所有id
            let ids = [...this.playingMovieIds];
            // 截取数组，从列表长度开始，每次截取10位
            ids = ids.splice(this.playingList.length, 10);
            // 组装请求参数
            let movieIds = ids.join(',');
            getMoreDataList(movieIds).then((data)=>{
                // 得到返回回来的数据之后,由于返回回来的是一个数组，所有对两个数组进行组合
                this.playingList = [...this.playingList, ...data];
                // 数据渲染完成，刷新滚动视图
                this.$nextTick(()=>{
                    this.$refs.content.refresh();
                });
            });
        }
    },
    created() {
        // 在这个钩子函数里面请求数据
        getPlayingList().then(({data, movieIds})=>{
            // console.log('请求成功');
            // 赋值数据
            this.playingList = data;
            this.playingMovieIds = movieIds;
            // console.log(this.palyingList);

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

