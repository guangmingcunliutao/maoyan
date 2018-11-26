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

请求更多正在热映的数据
参数：
token：
movieIds：
*/
const MORE_PLAYING_API = '/ajax/moreComingList';

/* 

所有的城市接口

*/
const CITY_LIST_API = '/dianying/cities.json'

/* 

本期最受期待接口
http://m.maoyan.com/ajax/mostExpected?ci=50&limit=10&offset=0&token=

*/


const MOST_EXPECTED_API = '/ajax/mostExpected'


/* 

即将上映的接口
参数：
ci：城市id
token：可选，用户标识
limit：数据长度

*/
const COMING_API = '/ajax/comingList'

/* 

更多即将上映接口
参数
ci：城市id
token：用户标识
limit：数据长度
movieIds：

*/
const MORE_COMING_API = '/ajax/moreComingList'




/* 

请求影院列表接口
参数：
day：当天日期
offset：
limit：长度
cityId：城市id

*/
const CINEMA_API = '/ajax/cinemaList'

/* 

搜索接口
kw: c
cityId: 55
stype: 2

*/
const SEARCH_API = '/ajax/search'

/* 

电影详细信息
movieId

*/
const DETAIL_MOVIE_API = '/ajax/detailmovie'


// 向外输出
export default {
    PRO_HOST,
    SAT_HOST,
    PLAYING_API,
    COMING_API,
    CITY_LIST_API,
    CINEMA_API,
    MOST_EXPECTED_API,
    SEARCH_API,
    MORE_COMING_API,
    MORE_PLAYING_API,
    DETAIL_MOVIE_API
}