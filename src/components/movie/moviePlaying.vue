<template>
    <app-content ref="content" :style="{top: '1.88rem'}" :canLoadMore="canLoadMore" @loadmore="getMoreData">
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
            playingMovieIds: [],
            // 判断是否能够加载更多
            canLoadMore: true
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

            // 发送请求，
            // 在发送一次请求之后，在没有得到返回结果之前，不能再发送请求，
            this.canLoadMore = false;
            getMoreDataList(movieIds).then((data)=>{
                // 得到返回回来的数据之后,由于返回回来的是一个数组，所有对两个数组进行组合
                this.playingList = [...this.playingList, ...data];

                // 判断是否加载完了所有的数据,如果加载完所有数据，不能再发送请求
                if(this.playingList.length >= this.playingMovieIds.length){
                    this.canLoadMore = false;
                }else{
                    // 数据没有全部请求完毕，并且等到返回数据之后，允许再次发送请求
                    this.canLoadMore = true;
                }
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

