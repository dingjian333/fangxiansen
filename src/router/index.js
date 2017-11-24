import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import One from '@/components/luyou/one'
import Two from '@/components/luyou/two'
import Three from '@/components/luyou/three'
import Four from '@/components/luyou/four'
import Five from '@/components/luyou/five'
import Six from '@/components/luyou/six'
import Seven from '@/components/luyou/seven'
import Eight from '@/components/luyou/eight'
import Onea from '@/components/bottomluyou/lianxi'
import Oneb from '@/components/bottomluyou/guanyu'
import Zhuangxouliucheng from '@/components/luyou/zhuangxouliucheng'
import Shejishixiangqing from '@/components/luyou/shejishixiangqing'
import Fanganxiangqing from '@/components/luyou/fanganxiangqing'
import Zhuangxouyusuan from '@/components/luyou/zhuangxouyusuan'
import Pingluen from '@/components/luyou/pingluen'
import Peizhi from '@/components/luyou/peizhi'
import Gongdizhibo from '@/components/luyou/gongdizhibo'
import Xiaoguotu from '@/components/luyou/xiaoguotu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/one',
      component:One
    },
    {
      path: '/two',
      component:Two
    },
    {
      path: '/three',
      component:Three
    },
    {
      path: '/four',
      component:Four
    },
    {
      path: '/five',
      component:Five
    },
    {
      path: '/six',
      component:Six
    },
    {
      path: '/seven',
      component:Seven
    },
    {
      path: '/eight',
      component:Eight
    },
    {
      path: '/onea',
      component:Onea
    },
    {
      path: '/oneb',
      component:Oneb
    },
    {
      path: '/zhuangxouliucheng',
      component:Zhuangxouliucheng
    },
    {
      path: '/shejishixiangqing',
      component:Shejishixiangqing
    },
    {
      path: '/fanganxiangqing',
      component:Fanganxiangqing
    },
    {
      path: '/zhuangxouyusuan',
      component:Zhuangxouyusuan
    },
    {
      path: '/pingluen',
      component:Pingluen
    },
    {
      path: '/peizhi',
      component:Peizhi
    },
    {
      path: '/gongdizhibo',
      component:Gongdizhibo
    },
    {
      path: '/xiaoguotu',
      component:Xiaoguotu
    }
  ]
})
