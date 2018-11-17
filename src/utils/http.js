// 对axios请求参数进行处理，将相同的配置写在一起

// 引入axios插件
import axios from 'axios'

// 引入接口处理文件
import API from '../api'

// 向外输出axios请求服务
// 参数：axios请求参数
export default function http(options){
    let obj = {};
    // 对请求参数进行判断
    if(options.method == 'GET'){
        // get请求只需要参数，不需要数据
        obj.params = options.data;
    }else if(options.method == 'POST') {
        // data：请求主体被发送的数据
        obj.data = options.data;
    }
    // 返回一个axios请求
    return axios({
        url: options.url,
        method: options.method,
        // 不同的请求方式，不要发送的数据不同
        ...obj,
        // baseURL：将自动拼接到url前面，便于为axios实例的方法传递相对的url
        baseURL: API.SAT_HOST,
        // 请求超时时间
        timeout: 5000
    });
}