<template>
    <app-content :style="{top: '1.88rem'}">
        <div class="palying">
            <ul>
                <!-- 抽取每一个电影的详细信息，成为一个组件，传入组件需要的数据对象 -->
                <movie-info v-for="palyingMovie in palyingList" :movieInfo="palyingMovie"></movie-info>
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
        });
    }
}
</script>

<style lang="scss" scoped>

</style>

