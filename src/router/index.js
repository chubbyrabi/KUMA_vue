import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
	path: '/',
	name: 'home',
	component: HomeView,
	meta: {
		title: 'KUMA | 陪伴你的好橡皮',
		meta: [
			{ name: 'description', content: '這裡是緯育牌 KUMA 系列的主頁。我們提供實用且設計精美的文具，陪你度過人生中的大小時刻，不論學習、工作還是創作，KUMA 都是你最好的夥伴！' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:title', content: 'KUMA | 陪伴你的好橡皮' },
			{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/' },
			{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
			{ property: 'og:site_name', content: 'KUMA' },
			{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
		]
	}
	},
	{
		path: '/product',
		name: 'product',
		meta: {
			title: 'KUMA | 商品情報',
			meta: [
				{ name: 'description', content: '這裡是緯育牌 KUMA 系列的綜合商品頁，包含新產品，橡皮擦，修正帶，鉛筆，自動鉛筆等。' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'KUMA | 商品情報' },
				{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/product' },
				{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
				{ property: 'og:site_name', content: 'KUMA' },
				{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
			]
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: 'about' */ '../views/ProductView.vue'),
		children:[
			{
				path: 'eraser',
				name: 'eraser',
				component: () => import('@/views/product/EraserView.vue'),
				meta: {
					title: 'KUMA | 商品情報：橡皮擦',
					meta: [
						{ name: 'description', content: '這裡是緯育牌 KUMA 系列的商品頁，包含所有橡皮擦產品。' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:title', content: 'KUMA | 商品情報：橡皮擦' },
						{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/product/eraser' },
						{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
						{ property: 'og:site_name', content: 'KUMA' },
						{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
					]
				}
			},
			{
				path: 'correction_tape',
				name: 'correction_tape',
				component: () => import('@/views/product/Correction_tapeView.vue'),
				meta: {
					title: 'KUMA | 商品情報：修正帶',
					meta: [
						{ name: 'description', content: '這裡是緯育牌 KUMA 系列的商品頁，包含所有修正帶產品。' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:title', content: 'KUMA | 商品情報：修正帶' },
						{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/product/correction_tape' },
						{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
						{ property: 'og:site_name', content: 'KUMA' },
						{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
					]
				}
			},
			{
				path: 'pencil',
				name: 'pencil',
				component: () => import('@/views/product/PencilView.vue'),
				meta: {
					title: 'KUMA | 商品情報：鉛筆',
					meta: [
						{ name: 'description', content: '這裡是緯育牌 KUMA 系列的商品頁，包含所有鉛筆產品。' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:title', content: 'KUMA | 商品情報：鉛筆' },
						{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/product/pencil' },
						{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
						{ property: 'og:site_name', content: 'KUMA' },
						{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
					]
				}
			},
			{
				path: 'graph',
				name: 'graph',
				component: () => import('@/views/product/GraphView.vue'),
				meta: {
					title: 'KUMA | 商品情報：自動鉛筆',
					meta: [
						{ name: 'description', content: '這裡是緯育牌 KUMA 系列的商品頁，包含所有自動鉛筆產品。' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:title', content: 'KUMA | 商品情報：自動鉛筆' },
						{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/product/graph' },
						{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
						{ property: 'og:site_name', content: 'KUMA' },
						{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
					]
				}
			},
		]
	},
	{
		path: '/festival',
		name: 'festival',
		meta: {
			title: 'KUMA | 50 周年慶典',
			meta: [
				{ name: 'description', content: '這裡是緯育牌 KUMA 系列的主頁。我們提供實用且設計精美的文具，陪你度過人生中的大小時刻，不論學習、工作還是創作，KUMA 都是你最好的夥伴！' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'KUMA | 50 周年慶典' },
				{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/festival' },
				{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
				{ property: 'og:site_name', content: 'KUMA' },
				{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
			]
		},
		component: () => import('../views/FestivalView.vue'),
		children:[
			{
				path: 'support',
				name: 'support',
				component: () => import('@/views/festival/SupportView.vue'),
				meta: {
					title: 'KUMA | 50 周年慶典：生日應援',
					meta: [
						{ name: 'description', content: '這裡是緯育牌 KUMA 系列的主頁。我們提供實用且設計精美的文具，陪你度過人生中的大小時刻，不論學習、工作還是創作，KUMA 都是你最好的夥伴！' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:title', content: 'KUMA | 50 周年慶典：生日應援' },
						{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/festival/support' },
						{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
						{ property: 'og:site_name', content: 'KUMA' },
						{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
					]
				}
			},
			{
				path: 'expo',
				name: 'expo',
				component: () => import('@/views/festival/ExpoView.vue'),
				meta: {
					title: 'KUMA | 50 周年慶典：紀念特展',
					meta: [
						{ name: 'description', content: '這裡是緯育牌 KUMA 系列的主頁。我們提供實用且設計精美的文具，陪你度過人生中的大小時刻，不論學習、工作還是創作，KUMA 都是你最好的夥伴！' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:title', content: 'KUMA | 50 周年慶典：紀念特展' },
						{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/festival/expo' },
						{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
						{ property: 'og:site_name', content: 'KUMA' },
						{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
					]
				}
			},
			{
				path: 'store',
				name: 'store',
				component: () => import('@/views/festival/StoreView.vue'),
				meta: {
					title: 'KUMA | 50 周年慶典：限定商店',
					meta: [
						{ name: 'description', content: '這裡是緯育牌 KUMA 系列的主頁。我們提供實用且設計精美的文具，陪你度過人生中的大小時刻，不論學習、工作還是創作，KUMA 都是你最好的夥伴！' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:title', content: 'KUMA | 限定商店' },
						{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/festival/store' },
						{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
						{ property: 'og:site_name', content: 'KUMA' },
						{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
					]
				}
			},
			{
				path: 'tour_bus',
				name: 'tour_bus',
				component: () => import('@/views/festival/Tour_busView.vue'),
				meta: {
					title: 'KUMA | 50 周年慶典：遊行巴士',
					meta: [
						{ name: 'description', content: '這裡是緯育牌 KUMA 系列的主頁。我們提供實用且設計精美的文具，陪你度過人生中的大小時刻，不論學習、工作還是創作，KUMA 都是你最好的夥伴！' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:title', content: 'KUMA | 50 周年慶典：遊行巴士' },
						{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/festival/tour_bus' },
						{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
						{ property: 'og:site_name', content: 'KUMA' },
						{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
					]
				}
			},
		]
	},
	{
		path: '/news',
		name: 'news',
		meta: {
			title: 'KUMA | 最新消息',
			meta: [
				{ name: 'description', content: '這裡是緯育牌 KUMA 系列的主頁。我們提供實用且設計精美的文具，陪你度過人生中的大小時刻，不論學習、工作還是創作，KUMA 都是你最好的夥伴！' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'KUMA | 最新消息' },
				{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/news' },
				{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
				{ property: 'og:site_name', content: 'KUMA' },
				{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
			]
		},
		component: () => import('../views/NewsView.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		meta: {
			title: 'KUMA | 聯絡管道',
			meta: [
				{ name: 'description', content: '這裡是緯育牌 KUMA 系列的主頁。我們提供實用且設計精美的文具，陪你度過人生中的大小時刻，不論學習、工作還是創作，KUMA 都是你最好的夥伴！' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'KUMA | 聯絡管道' },
				{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/contact' },
				{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
				{ property: 'og:site_name', content: 'KUMA' },
				{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
			]
		},
		component: () => import('../views/ContactView.vue')
	},
	{
		path: '/about',
		name: 'about',
		meta: {
			title: 'KUMA | 關於我們',
			meta: [
				{ name: 'description', content: '這裡是緯育牌 KUMA 系列的主頁。我們提供實用且設計精美的文具，陪你度過人生中的大小時刻，不論學習、工作還是創作，KUMA 都是你最好的夥伴！' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'KUMA | 關於我們' },
				{ property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA_vue/about' },
				{ property: 'og:image', content: 'https://chubbyrabi.github.io/KUMA_vue/img/icons/og-img.png' },
				{ property: 'og:site_name', content: 'KUMA' },
				{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' }
			]
		},
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

const writer = (to) => {
	//首先找到 head 裡的 meta
	const deleArr = [];
	document.head.childNodes.forEach(item => {
		if (item.tagName === "META") {
			deleArr.push(item);
		}
	});

	// 删除原来的 meta
	deleArr.forEach(item => {
		document.head.removeChild(item);
	})

	//添加想要的 meta（全局）
	const metas = document.createElement("META");
	const creatArr = [
		{ charset: "utf-8" },
		{ "http-equiv": "X-UA-Compatible", content: "IE=edge" },
		// 視圖縮放
		{ name: "viewport", content: "width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui" }
	];

	// 將單個路由設定的 meta 加到 creatArr 數組中
	// 局部 meta 和全局 meta 重複時，局部 meta 替換全局 meta
	const tmpArr = to.meta.meta ? to.meta.meta.concat() : [];

	if (tmpArr.length > 0) {
		to.meta.meta.forEach((item, index) => {
			creatArr.forEach((ele, ind) => {
				if (Object.keys(item)[0] == Object.keys(ele)[0]) {
					creatArr[ind] = JSON.parse(JSON.stringify(item));
					tmpArr.splice(index, 1);
				}
			});
		});
	}

	// 生成合併後的數組
	const eleArr = creatArr.concat(tmpArr);

	// 將設定的值寫入文檔片段
	const creatFrag = document.createDocumentFragment();
	eleArr.forEach(ele => {
		creatFrag.append(metas.cloneNode());
		Object.entries(ele).forEach(item => {
			creatFrag.lastChild.setAttribute(item[0], item[1]);
		});
	});

	// 將文檔片段寫入 head
	document.head.prepend(creatFrag);
}

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	// 調用自動添加 meta
	writer(to);
	next();
})

export default router

// 導航守衛是 Vue Router 提供的一種路由守護機制，
// 它允許在每次導航時進行攔截，並執行一些特定的操作。
// 它可以用來控制導航的流程、實現權限控制、記錄訪問歷史等。
// 常見的導航守衛有全局導航守衛、路由導航守衛、組件導航守衛。
// 導航守衛分成三種：

// 1.全局守衛：在根組件中設置，每次跳轉路由都會觸發，可以在此處做權限校驗。
// 2.路由獨享守衛：在路由配置裡設置，只對當前路由有效。
// 3.組件內守衛：在組件中設置，當組件被渲染時觸發。