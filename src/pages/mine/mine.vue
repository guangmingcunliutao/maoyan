<template>
    <div id="mine" class="page">
        <app-head title="我的"></app-head>
        <div class="map" ref="map"></div>
    </div>
</template>

<script>
export default {
    name: 'mine',
    data(){
        return {}
    },
    methods: {
        Map() {
            
            navigator.geolocation.getCurrentPosition((position)=>{
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                // 坐标转换
                let point = new BMap.Point(lat, lon);

                // 地图初始化
                let map = new BMap.Map(this.$refs.map);
                map.centerAndZoom(point, 15);
                map.addControl(new BMap.NavigationControl());
                map.enableScrollWheelZoom(true);

                //添加谷歌marker和label
                var markergg = new BMap.Marker(point);
                map.addOverlay(markergg); //添加谷歌marker
                var labelgg = new BMap.Label("未转换的谷歌标注（错误）",{offset:new BMap.Size(20,-10)});
                markergg.setLabel(labelgg); //添加谷歌label

                //坐标转换完之后的回调函数
                let translateCallback = function (data){
                    if(data.status === 0) {
                        var marker = new BMap.Marker(data.points[0]);
                        map.addOverlay(marker);
                        var label = new BMap.Label("转换后的百度标注（正确）",{offset:new BMap.Size(20,-10)});
                        marker.setLabel(label); //添加百度label
                        map.setCenter(data.points[0]);
                    }
                }

                setTimeout(function(){
                    var convertor = new BMap.Convertor();
                    var pointArr = [];
                    pointArr.push(point);
                    convertor.translate(pointArr, 3, 5, translateCallback)
                }, 1000);

            });
        }
    },
    created() {
    },
    mounted() {
        this.Map();
    },
    
}
</script>

<style lang="scss" scoped>
.map{
    width: 100%;
    position: absolute;
    top: 1rem;
    bottom: 0;
}
</style>

