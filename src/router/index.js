import Vue from 'vue'
import Router from 'vue-router'
import single from '@/components/football/single'
import todayBall from '@/components/football/todayBall'
import waves  from '@/components/football/waves'
import totalGoal from '@/components/football/totalGoal'
import fullField from '@/components/football/fullField'
import comprehensive from '@/components/football/Comprehensive'
import rollBall from '@/components/football/rollBall'
import drugAddiction from '@/components/basketball/drugAddiction'
import basketComprehensive from  '@/components/basketball/basketComprehensive'
import basketRollBall from '@/components/basketball/basketRollBall'
import footballResult from '@/components/football/footballResult'
import basketResult from '@/components/basketball/basketResult'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'single',
      component: single
    },
    {
      path: '/todayBall',
      name: 'todayBall',
      component: todayBall
    },
    {
      path: '/waves',
      name: 'waves',
      component: waves
    },
    {
      path: '/totalGoal',
      name: 'totalGoal',
      component: totalGoal
    },
    {
      path: '/fullField',
      name: 'fullField',
      component: fullField
    },
    {
      path: '/comprehensive',
      name: 'comprehensive',
      component: comprehensive
    },
    {
      path: '/rollBall',
      name: 'rollBall',
      component: rollBall
    },
    {
      path:'/footballResult',
      name:'footballResult',
      component:footballResult
    },
    {
      path: '/basketRollBall',
      name: 'basketRollBall',
      component: basketRollBall
    },
    {
      path: '/drugAddiction',
      name: 'drugAddiction',
      component: drugAddiction
    },
    {
      path: '/basketComprehensive',
      name: 'basketComprehensive',
      component: basketComprehensive
    },
    {
      path:'/basketResult',
      name:'basketResult',
      component:basketResult
    }
  ]
})
