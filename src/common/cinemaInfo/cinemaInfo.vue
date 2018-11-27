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
            <span class="addr">{{cinemaItem.addr}}</span>
            <span class="distance">{{cinemaItem.distance}}</span>
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
            margin-right: .1rem;
        }
        .price,.q{
            height: .5rem;
            color: red;
            font-size: .38rem;
        }
        .q{
            font-size: .24rem;
        }
    }
}
.location{
    height: .4rem;
    line-height: .4rem;
    margin-top: .1rem;
    span{
        display: inline-block;
        vertical-align: middle;
    }
    .addr{
        width: 4.3rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .distance{
        float: right;
    }
}
</style>