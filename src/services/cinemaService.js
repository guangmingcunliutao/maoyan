import http from "../utils/http";
import api from "../api";

// 获取当前日期的：YYYY-MM-DD格式
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

// 获取影院列表数据
export function getCinemaDataList(ci) {
    return new Promise((resolve, reject) => {
        http({
            url: api.CINEMA_API,
            method: 'GET',
            data: {
                day: getNowFormatDate(),
                limit: 20,
                cityId: ci
            }
        }).then(({data, status}) => {
            // console.log(data);
            if(status != 200){
                return;
            }
            let newData = data.cinemas.map((item)=>{
                let {addr, distance, id, mark, nm, promotion, sellPrice, tag} = item;
                return {addr, distance, id, mark, nm, promotion, sellPrice, tag};
            });
            resolve(newData);
        }).catch((error) => {
            reject(error);
        });
    });
}