<template>
    <div class="cinemaitem">
        <div class="title">
            <span class="itemnm">{{cinemaItem.nm}}</span>
            <span>
                <span class="price">{{cinemaItem.sellPrice}}</span>
                <span class="q">元起</span>
            </span>
        </div>
        <div class="location">
            <span class="">{{cinemaItem.addr}}</span>
            <span>{{cinemaItem.distance}}</span>
        </div>
        <div class="lable"></div>
        <div class="discount"></div>
    </div>
</template>

<script>
export default {
    name: 'cinemainfo',
    props: {
        cinemaItem: Object
    },
    created() {
        // console.log(this.cinemaItem);
    }
}
</script>

<style lang="scss" scoped>
.cinemaitem{
    padding: .26rem .3rem .13rem 0;
    border-bottom: 1px solid #ccc;
    font-size: .24rem;
    margin: 0 .3rem;
    font-weight: normal;
    .title{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        .itemnm{
            font-size: .32rem;
        }
        .price,.q{
            color: red;
            font-size: .38rem;
        }
    }
}
</style>

