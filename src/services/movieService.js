// 在这里请求数据，就可以通过调用http来发送axios请求

import http from '../utils/http'
import API from '../api'

// 向外输出请求数据的函数
export function getPlayingList(){
    // 返回promise，处理异步问题
    return new Promise((resolve, reject)=>{
        // 发送请求
        http({
            // 接口参数
            url: API.PLAYING_API,
            method: 'GET',
            data: {
                token: ''
            }
        }).then(({data, status})=>{
            // 获取数据，对数据进行解构处理

            // 对返回状态进行判断
            if(status != 200){
                console.log('请求失败');
                return ;
            }else {
                // 对数据进行处理，然后传值
                // console.log(data);
                let newData = data.movieList.map((item)=>{
                    // 遍历数据，对数据进行解构处理
                    let {id, nm, img, version, sc, star, showInfo, wish, globalReleased} = item;
                    // 特殊数据，特殊处理
                    img = img.replace(/w.h/,'112.180');
                    return {id, nm, img, version, sc, star, showInfo, wish, globalReleased};
                });
                // 成功回调，传入参数，经过处理的数据和所有的id
                resolve({data: newData, movieIds: data.movieIds});
            }
        }).catch(()=>{
            // 请求失败，进行处理
            reject();
        });
    });
}

// 正在上映页面下拉刷新
export function getMoreDataList(ids) {
    return new Promise((resolve, reject)=>{
        http({
            url: API.MORE_PLAYING_API,
            method: 'GET',
            data: {
                token: '',
                movieIds: ids
            }
        }).then(({data, status})=>{
            if(status != 200){
                // 请求失败
                return;
            }else {
                let newData = data.coming.map((item)=>{
                    // 遍历数据，对数据进行解构处理
                    let {id, nm, img, version, sc, star, showInfo, wish, globalReleased} = item;
                    // 特殊数据，特殊处理
                    img = img.replace(/w.h/,'112.180');
                    return {id, nm, img, version, sc, star, showInfo, wish, globalReleased};
                });
                resolve(newData);
            }
        }).catch((error)=>{
            // 请求失败
            console.log(error);
        });
    });
}

// 请求即将上映的数据
export function getComingList () {
    return new Promise ((resolve, reject)=>{
        http({
            url: API.COMING_API,
            method: 'GET',
            data: {
                ci: 30,
                token: '',
                limit: 10
            }
        }).then(({data, status})=>{
            // console.log(data,status);
            // 对状态进行判断
            if(status != 200){
                // 请求失败
                return ;
            }else {
                console.log(data);
                // 对数据进行处理
                let newData = data.coming.map((item)=>{
                    let {id, nm, img, wish, star, showInfo, version, comingTitle, globalReleased, sc} = item;
                    img = img.replace(/w.h/,'112.180');
                    return {id, nm, img, wish, star, showInfo, version, comingTitle, globalReleased, sc};
                });

                // 让数据按照其中的日期字段分类
                let handedData = {}
                newData.map((item)=>{
                    // 判断对象是否有这个属性，如果没有，就添加，有就向里面添加元素
                    if(!handedData[item.comingTitle]){
                        handedData[item.comingTitle] = []
                    }
                    handedData[item.comingTitle].push(item);
                });

                
                resolve(handedData);
            }
        }).catch(()=>{
            console.log('请求失败');
        });
    });
}