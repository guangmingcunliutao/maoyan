<template>
    <div id="buymovie" class="page">
        <app-head :title="detail.nm">
            <span @click="goBack" class="goBack" slot="left"></span>
        </app-head>
    </div>
</template>

<script>
import { getDetailMovie } from '../../services/movieService';
export default {
    data() {
        return {
            detail: {}
        }
    },
    created(){
        this.initData(this.$route.params.id);
    },
    methods: {
        goBack(){
            this.$router.back();
        },
        initData(movieId) {
            getDetailMovie(movieId).then((data)=>{
                this.detail = {...data};
                console.log(this.detail);
            }).catch((error)=>{
                console.log(error);
            });
        }
    },
    deactivated() {
        this.$destroy();
    }
}
</script>

<style lang="scss" scoped>
#buymovie{
    top: 0;
    bottom: -.98rem;
    background: white;
    z-index: 2;
}
.goBack{
    content: '';
    display: block;
    width: .3rem;
    height: .3rem;
    border: .05rem white solid;
    border-bottom: 0;
    border-right: 0;
    transform: rotate(-45deg);
    margin-top: .3rem;
}
</style>

