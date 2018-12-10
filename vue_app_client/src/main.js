import Vue from 'vue'
import App from './App'
import router from './router'

// 引入mint-ui css
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

// 引入mui css文件 大部分组件都要使用css在main.js引入
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 引入组件mintui库Header
// 引入指定组件
import {Header,Swipe,SwipeItem} from "mint-ui";

// 注册当前项目中 <mt-header>
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);


// 引入vue-resource 发送ajax
// 1. 引入vue-resource 库所有组件
import VueResource from "vue-resource"
// 2. 将所有组件注册
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
