# maoyan

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<!-- 

commit 1
对于多处地方要使用到的东西，设置成全局组件，并且引入到公共的js文件当中，向外输出install方法，在install方法里面将组件设置到全局，然后在main文件当中通过引用js文件使用use方法

使用父子组件传值，非父子组件传值，以及v-model模式传值，父子级元素组件可以互相访问

 -->

 <!-- 
 
 commit 2
 axios请求的封装和使用，对获取到的数据进行处理过滤，模块的提取
 
  -->

  <!-- 
  
  commit 3
  电影详细信息抽取成为组件

   -->

   <!-- 
   
   commit 4
   滚动视图的创建

   this.$nextTick：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
   
    -->
