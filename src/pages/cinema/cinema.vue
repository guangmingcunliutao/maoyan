<template>
    <div id="cinema" class="page">
        <app-head title="影院"></app-head>
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
            cinemaDataList: []
        }
    },
    computed: {
        ...mapState({
            ci: 'ci'
        })
    },
    created() {
        getCinemaDataList(this.ci).then((data) => {
            this.cinemaDataList = [...data];
            // console.log(this.cinemaDataList);
        }).catch((error) => {
            console.log(error);
        });
    }
}
</script>

<style lang="scss" scoped>
</style>

