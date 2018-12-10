import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 1:引入自定义组件
import Container from '@/components/practice/Container'
import newsListContainer from '@/components/news/newsListContainer'
import listContainer from '@/components/practice/listContainer'
import HomeContainer from '@/components/tabbar/HomeContainer'




Vue.use(Router)

// 2：配置访问自定义组件路径
// {path访问路径 component 组件名称}
export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path: '/container',name: 'container',component: Container},
    {path: '/list',name: 'list',component: listContainer},
    {path: '/home',name: 'home',component: HomeContainer},
    {path: '/news',name: 'news',component: newsListContainer}

  ]
})
