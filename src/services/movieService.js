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
                    let {id, nm, img, version, sc, star, showInfo, wish, globalReleased, showst} = item;
                    // 特殊数据，特殊处理
                    img = img.replace(/w.h/,'112.180');
                    return {id, nm, img, version, sc, star, showInfo, wish, globalReleased, showst};
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
                    let {id, nm, img, version, sc, star, showInfo, wish, globalReleased, showst} = item;
                    // 特殊数据，特殊处理
                    img = img.replace(/w.h/,'112.180');
                    return {id, nm, img, version, sc, star, showInfo, wish, globalReleased, showst};
                });
                resolve(newData);
            }
        }).catch((error)=>{
            // 请求失败
            console.log(error);
            reject();
        });
    });
}

// 请求即将上映的数据
export function getComingList (ci) {
    return new Promise ((resolve, reject)=>{
        http({
            url: API.COMING_API,
            method: 'GET',
            data: {
                ci: ci,
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
                // console.log(data);
                // 对数据进行处理
                let newData = data.coming.map((item)=>{
                    // 判断，如果有showInfo直接赋值，没有就把rt的赋值个showinfo
                    if(!item.showInfo){
                        item.showInfo = item.rt;
                    }
                    let {id, nm, img, wish, star, showInfo, version, comingTitle, globalReleased, sc, showst} = item;
                    img = img.replace(/w.h/,'112.180');
                    return {id, nm, img, wish, star, showInfo, version, comingTitle, globalReleased, sc, showst};
                });

                // 让数据按照其中的日期字段分类
                let handedData = {};
                newData.map((item)=>{
                    // 判断对象是否有这个属性，如果没有，就添加，有就向里面添加元素
                    if(!handedData[item.comingTitle]){
                        handedData[item.comingTitle] = [];
                    }
                    handedData[item.comingTitle].push(item);
                });
                resolve({data: handedData, movieIds: data.movieIds});
            }
        }).catch((error)=>{
            console.log('请求失败');
            reject(error);
        });
    });
}

// 请求更多即将上映数据
export function getMoreComingData(ci, ids, comingList){
    return new Promise((resolve, reject)=>{
        http({
            url: API.MORE_COMING_API,
            method: 'GET',
            data: {
                ci: ci,
                limit: 10,
                token: '',
                movieIds: ids
            }
        }).then(({data, status})=>{
            // console.log(data);
            if(status !=200){
                return ;
            }
            let newData = data.coming.map((item)=>{
                if(!item.showInfo){
                    item.showInfo = item.rt;
                }
                let {id, nm, img, wish, star, showInfo, version, comingTitle, globalReleased, sc, showst} = item;
                img = img.replace('w.h', '112.180');
                return {id, nm, img, wish, star, showInfo, version, comingTitle, globalReleased, sc, showst};
            });
            // 让数据按照其中的日期字段分类
            newData.map((item)=>{
                // 判断对象是否有这个属性，如果没有，就添加，有就向里面添加元素
                if(!comingList[item.comingTitle]){
                    comingList[item.comingTitle] = [];
                }
                comingList[item.comingTitle].push(item);
            });
            resolve(comingList);
        }).catch((error)=>{
            // console.log(error);
            reject(error);
        });
    });
}

// 请求本期最受欢迎数据
export function mostExpected(ci,offset) {
    return new Promise((resolve, reject) => {
        http({
            url: API.MOST_EXPECTED_API,
            method: 'GET',
            data: {
                ci: ci,
                offset: offset,
                limit: 10,
                token: ''
            }
        }).then(({data, status})=> {

            if(status != 200){
                // 请求失败
                return;
            }
            // 处理数据
            let newData = data.coming.map((item)=>{
                let {comingTitle, id, img, nm, wish, wishst} = item;
                // 更改img
                img = img.replace('w.h', '170.230');
                return {comingTitle, id, img, nm, wish, wishst};
            });
            // console.log(newData);
        
            
            resolve(newData);
            
        }).catch((error)=> {
            console.log(error);
        });
    });
}

// 请求所有的城市数据
export function getCityList(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.CITY_LIST_API,
            method: 'GET'
        }).then(({data, status})=>{
            if(status != 200){
                // 请求失败
                return ;
            }else {
                // 请求成功，处理数据
                // console.log(data);
                // 定义一个新对象
                let cityMap = {}
                data.cts.map(item=>{
                    // 如果对象中不存在这个首字母的属性，那就增加一个，如果有了，直接往这个数组属性里面添加数据
                    if(!cityMap[item.py.slice(0, 1)]){
                        cityMap[item.py.slice(0, 1)] = [];
                    }
                    cityMap[item.py.slice(0, 1)].push(item);
                });

                // 提取首字母
                // 抽取对象中的所有key值，保存到数组当中
                // let letter = Object.keys(cityMap);
                let letter = []
                for(var item in cityMap){
                    letter.push(item);
                }

                /* letter.sort((a, b)=>{
                    // console.log(a.charCodeAt(0), b.charCodeAt(0));
                    return a.charCodeAt(0) - b.charCodeAt(0);
                }); */
                // console.log(letter);

                // 对首字母进行排序
                for(var i = 0; i < letter.length; i++){
                    for(var j = i + 1; j<letter.length; j++){
                        if(letter[i] > letter[j]){
                            var tmp = letter[i];
                            letter[i] = letter[j];
                            letter[j] = tmp;
                        }
                    }
                }
                // console.log(letter);

                // 返回一个数组，数组里面的每一个元素都是一个对象
                let newData = letter.map(item=>{
                    return {
                        key: item,
                        value: cityMap[item]
                    }
                });
                // console.log(newData);
                // 数据处理完成
                resolve({key: letter, data : newData});
            }
        }).catch((error)=>{
            // 请求失败
            console.log(error);
        });
    });
}

