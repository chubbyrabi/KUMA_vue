import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
	path: '/',
	name: 'home',
	component: HomeView,
	meta: { title: '首頁' }
	},
	{
		path: '/product',
		name: 'product',
		meta: { title: '商品情報' },
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue'),
		children:[
			{
				path: 'eraser',
				name: 'eraser',
				component: () => import('@/views/product/EraserView.vue'),
				meta: { title: '橡皮擦' }
			},
			{
				path: 'correction_tape',
				name: 'correction_tape',
				component: () => import('@/views/product/Correction_tapeView.vue'),
				meta: { title: '修正帶' }
			},
			{
				path: 'pencil',
				name: 'pencil',
				component: () => import('@/views/product/PencilView.vue'),
				meta: { title: '鉛筆' }
			},
			{
				path: 'graph',
				name: 'graph',
				component: () => import('@/views/product/GraphView.vue'),
				meta: { title: '自動鉛筆' }
			},
		]
	},
	{
		path: '/festival',
		name: 'festival',
		meta: { title: '周年慶典' },
		component: () => import('../views/FestivalView.vue'),
		children:[
			{
				path: 'support',
				name: 'support',
				component: () => import('@/views/festival/SupportView.vue'),
				meta: { title: '生日應援' }
			},
			{
				path: 'expo',
				name: 'expo',
				component: () => import('@/views/festival/ExpoView.vue'),
				meta: { title: '紀念特展' }
			},
			{
				path: 'store',
				name: 'store',
				component: () => import('@/views/festival/StoreView.vue'),
				meta: { title: '限定商店' }
			},
			{
				path: 'tour_bus',
				name: 'tour_bus',
				component: () => import('@/views/festival/Tour_busView.vue'),
				meta: { title: '遊行巴士' }
			},
		]
	},
	{
		path: '/news',
		name: 'news',
		meta: { title: '最新消息' },
		component: () => import('../views/NewsView.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		meta: { title: '聯絡管道' },
		component: () => import('../views/ContactView.vue')
	},
	{
		path: '/about',
		name: 'about',
		meta: { title: '關於我們' },
		component: () => import('../views/AboutView.vue')
	},
]

// router 跳轉畫面後，維持置頂
const scrollBehavior = (to, from, savedPosition) => {
	if(savedPosition && to.meta.keepAlive){
		return savedPosition;
	}
	return {left: 0, top: 0}
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router