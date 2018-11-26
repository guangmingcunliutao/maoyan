<template>
    <div id="cinema" class="page">
        <app-head title="影院"></app-head>
        <div class="sub-head">
            <city></city>
            <search>
                搜影院
            </search>
        </div>
        
        <filter-nav :isBlacker="isBlacker" @changeIsBlacker="changeIsBlacker"></filter-nav>

        <div @click="isBlackerAction" v-show="isBlacker" class="page blacker"></div>

        <app-content>
            <cinemainfo v-for="cinemaItem in cinemaDataList" :key="cinemaItem.id" :cinemaItem="cinemaItem"></cinemainfo>
        </app-content>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { getCinemaDataList } from '../../services/cinemaService'
export default {
    name: 'cinema',
    data() {
        return {
            cinemaDataList: [],
            isBlacker: false
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
            getCinemaDataList(this.ci).then((data) => {
                this.cinemaDataList = [...data];
            }).catch((error) => {
                console.log(error);
            });
        },
        changeIsBlacker(value){
            if(!value){
                this.isBlacker = false;
            }else {
                this.isBlacker = true;
            }
        },
        isBlackerAction() {
            this.isBlacker = false;
        }
    },
    created() {
        this.initData();
    }
}
</script>

<style lang="scss" scoped>
.sub-head{
    width: 100%;
    height: .88rem;
    position: absolute;
    top: 1rem;
    border-bottom: 1px solid #ccc;
    background: #f5f5f5;
    display: flex;
    z-index: 4;
}
.content{
    top: 2.68rem;
}
.blacker{
    bottom: -.98rem;
    background: rgba($color: #000000, $alpha: .3);
    z-index: 3;
}
</style>

