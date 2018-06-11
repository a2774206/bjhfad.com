import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Aboutus from '@/views/Aboutus'
import Media from '@/views/Media'
import Contactus from '@/views/Contactus'
import Talent from '@/views/Talent'
import Investment from '@/views/Investment'
import Marketing from '@/views/Marketing'
Vue.use(Router)

export default new Router({
	
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/aboutus',
      name: 'aboutus',
      component: Aboutus
    },{
      path: '/media',
      name: 'media',
      component: Media
    },{
    	path:'/Contactus',
    	name:'Contactus',
    	component:Contactus
    },{
    	path:'/Talent',
    	name:'Talent',
    	component:Talent
    },{
    	path:'/Investment',
    	name:'Investment',
    	component:Investment
    },{
    	path:'/Marketing',
    	name:'Marketing',
    	component:Marketing
    }
    
  ]
})
