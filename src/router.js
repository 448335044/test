import VueRouter from 'vue-router'

/*导入对应的路由组件*/
import Message from './components/message.vue'
import Help from './components/help.vue'
import Friend from './components/friend.vue'
import Person from './components/person.vue'
import Elclist from './components/goods/elclist.vue'
import Goodsinfo from './components/goods/goodsinfo.vue'
 /*创建路由对象*/
var router = new VueRouter({
  routes:[
/*配置漏油规则的*/
    {path:'/',redirect:'/help'},
    {path:'/message',component:Message},
    {path:'/help',component:Help},
    {path:'/friend',component:Friend},
    {path:'/person',component:Person},
    {path:'/goods/elcList',component:Elclist},
    {path:'/home/goodsinfo/:id',component:Goodsinfo}
  ],
  /*设置可以变得样式*/
  linkActiveClass:'mui-active'
})

/*把路由对象暴露出去*/
export default router
