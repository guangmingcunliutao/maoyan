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
   保持组件的状态
   this.$nextTick：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
   
    -->

    <!-- 
    
    commit 5 
    正在热映界面，下拉刷新，滚动视图的更新：可以设置每次点击页面都刷新一次滚动视图，也可以在只有请求数据，并且数据渲染完成之后，再刷新滚动视图
    
     -->

     <!-- 
     
     commit 6
     限制下拉刷新：每一次的请求没有得到结果之前，不能再次发送请求，所有数据请求完之后，不能再次发送请求

      -->

      <!-- 
      
      commit 7
      所有城市的接口配置，返回数据处理
      待解决：所有城市，按照首字母排序问题
      保存城市id，在其他界面刷新数据

      Vuex的使用
      state
      getter
      mutations
      actions
      
       -->