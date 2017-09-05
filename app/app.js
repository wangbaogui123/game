import Vue from 'vue'
import routers from './router'
import axios from 'axios'
import VueRouter from 'vue-router'
import canvasone from './canvasone'
import { Swipe, SwipeItem } from 'vue-swipe'
// import VLink from './components/VLink.vue'

Vue.prototype.$ajax = axios

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

require('./css/style.css')
require('./css/top.css')
require('./component.js')(Vue)

Vue.use(VueRouter);
Vue.use(canvasone);


const routes = routers();

console.log(routes)
const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

console.log(router)


const app = new Vue({
	
	el:"#app",
	router:router,
	data:{
		currentRoute: window.location.pathname,
		topshow:false    
	},
	computed:{
		// ViewComponent () {

		// 	const matchingView = routes[this.currentRoute]
		// 	return matchingView
		// 		? require('./views/' + matchingView + '.vue')
		// 		: require('./views/404.vue')
		// }
	},
	// render (h) {
	// 	return h(this.ViewComponent)
	// },
	methods:{
		com_Ajax(obj,success,error){
			this.$ajax(obj).then(function(data){

                success(data);
            },function(data){
				
                error(data);
            })
		}
	}


})


window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname
})





