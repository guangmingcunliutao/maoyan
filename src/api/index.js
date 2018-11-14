// 处理接口，方便维护和迭代

// 可以根据开发环境，测试环境，生产环境来配置不同的url
const PRO_HOST = 'http://m.maoyan.com';
const SAT_HOST = 'http://localhost:8080';

// 设置不同的接口配置项

/* 

正在热映的接口
参数：token：可选，用户标识

*/
const PLAYING_API = '/ajax/movieOnInfoList';

/* 

即将上映的接口
参数：
ci：城市id
token：可选，用户标识
limit：数据长度

*/
const COMING_API = '/ajax/comingList';

// 向外输出
export default {
    PRO_HOST,
    SAT_HOST,
    PLAYING_API,
    COMING_API
}