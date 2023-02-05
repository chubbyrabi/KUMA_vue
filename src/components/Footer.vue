<template>
	<footer>
		<div class="scrollTop">
		</div>
		<div class="wrapper">
			<div class="footer-icon">
				<router-link class="logo" to="/">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182 50">
						<polygon points="39.52 3.5 25.72 3.5 13.88 18.17 13.88 3.5 2.8 3.5 2.8 47.45 13.88 47.45 13.88 29.7 15.07 29.7 28.31 47.45 41.79 47.45 23.33 23.27 39.52 3.5"/>
						<path d="M68.1,28.64c0,3.18-.61,5.59-1.81,7.15a5.94,5.94,0,0,1-5,2.18,5.75,5.75,0,0,1-5-2.25c-1.21-1.02-1.82-4.09-1.82-7.36V3.5H43.4V28.56c0,6.35,1.54,11.3,4.57,14.72s7.55,5.22,13.29,5.22,10.23-1.78,13.33-5.3,4.59-8.48,4.59-14.92V3.5H68.1Z"/>
						<polygon points="109.17 19.28 96.93 3.5 86.6 3.5 86.6 47.45 97.67 47.45 97.67 21.18 108.19 34.51 110.14 34.51 120.73 21.16 120.73 47.45 131.81 47.45 131.81 3.5 121.48 3.5 109.17 19.28"/>
						<polygon points="157.21 23.09 166.97 47.45 179.2 47.45 160.1 3.5 154.18 3.5 135.51 47.45 147.45 47.45 157.21 23.09"/>
					</svg>
				</router-link>
				<ul class="icon">
					<li v-for="item in icon" :key="item.name">
						<a :href="item.link">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
								<path :d="item.path"/>
							</svg>
						</a>
					</li>
				</ul>
				<!-- <div class="search"></div> -->
				<p class="copyright">COPYRIGHT © 2022 KUMA</p>
			</div>
			<ul class="footer-menu">
				<li v-for="item in menu" :key="item.Ename">
					<router-link :to="{path:item.source}">
						<span>{{item.Ename}}</span>
						<span class="font-18">&nbsp;{{item.name}}</span>
					</router-link>
				</li>
			</ul>
			<ul class="footer-info">
				<li v-for="item in text"
					:key="item.txt"
					class="font-16"
				>
					<!-- 回到緯育 | 隱私政策 -->
					<template v-if="item.link && item.link2">
						<a :href="item.link" v-html="item.txt"></a>
						<span>&nbsp;|&nbsp;</span>
						<a :href="item.link2">{{ item.txt2 }}</a>
					</template>
					<!-- 其它的 -->
					<template v-else>
						<a :href="item.link"
							v-if="item.link"
							v-html="item.txt"
						>
						</a>
						<span v-else v-html="item.txt"></span>
					</template>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'FooterView',
	components: {
	},
	data(){
		return{
			icon:[
				{
					name: 'twitter',
					link: 'https://twitter.com/',
					path: 'M100,19a41.29,41.29,0,0,1-11.79,3.23,20.58,20.58,0,0,0,9-11.36,40.63,40.63,0,0,1-13,5,20.52,20.52,0,0,0-35,18.72,58.12,58.12,0,0,1-23.42-6.23A58.12,58.12,0,0,1,7,13.13a20.53,20.53,0,0,0,6.35,27.39A20.33,20.33,0,0,1,4,38v.26A20.52,20.52,0,0,0,20.48,58.33a20.64,20.64,0,0,1-9.28.35A20.53,20.53,0,0,0,30.37,72.93,40.87,40.87,0,0,1,16,80.2,41.11,41.11,0,0,1,0,81.43a58.07,58.07,0,0,0,31.45,9.22c37.74,0,58.38-31.26,58.38-58.38,0-.88,0-1.77-.07-2.65A41.53,41.53,0,0,0,100,19Z'
				},
				{
					name: 'instagram',
					link: 'https://www.instagram.com/',
					path: 'M50,0C63.59,0,65.28.05,70.61.3A36.85,36.85,0,0,1,82.75,2.63a24.3,24.3,0,0,1,8.86,5.76,24.47,24.47,0,0,1,5.76,8.86A36.74,36.74,0,0,1,99.7,29.39c.23,5.33.3,7,.3,20.61s0,15.28-.3,20.61a36.85,36.85,0,0,1-2.33,12.14A25.47,25.47,0,0,1,82.75,97.37,36.79,36.79,0,0,1,70.61,99.7c-5.33.23-7,.3-20.61.3s-15.28,0-20.61-.3a36.85,36.85,0,0,1-12.14-2.33,24.47,24.47,0,0,1-8.86-5.76,24.47,24.47,0,0,1-5.76-8.86A36.79,36.79,0,0,1,.3,70.61C.07,65.28,0,63.59,0,50S.05,34.72.3,29.39A36.79,36.79,0,0,1,2.63,17.25,24.34,24.34,0,0,1,8.39,8.39a24.47,24.47,0,0,1,8.86-5.76A36.79,36.79,0,0,1,29.39.3C34.72.06,36.41,0,50,0Zm0,25a25,25,0,1,0,17.68,7.32A25,25,0,0,0,50,25Zm32.5-1.25a6.25,6.25,0,1,0-1.83,4.42A6.25,6.25,0,0,0,82.5,23.75ZM50,35a15,15,0,1,1-10.61,4.39A15,15,0,0,1,50,35Z'
				},
				{
					name: 'facebook',
					link: 'https://www.facebook.com/',
					path: 'M58.75,57.5h12.5l5-20H58.75v-10c0-5.15,0-10,10-10h7.5V.7A139.17,139.17,0,0,0,62,0C48.39,0,38.75,8.28,38.75,23.5v14h-15v20h15V100h20Z'
				},
				{
					name: 'youtube',
					link: 'https://www.youtube.com/',
					path: 'M97.71,22.49C100,31.4,100,50,100,50s0,18.6-2.29,27.51A14,14,0,0,1,88,87.62C79.48,90,50,90,50,90s-29.46,0-38-2.38A14,14,0,0,1,2.29,77.51C0,68.6,0,50,0,50S0,31.4,2.29,22.49A14,14,0,0,1,12,12.38C20.54,10,50,10,50,10s29.48,0,38,2.38A14,14,0,0,1,97.71,22.49ZM40,67.5,70,50,40,32.5Z'
				}
			],
			menu:[
				{
					name: '商品情報',
					Ename: 'PRODUCT',
                    source: '/product',
				},
				{
					name: '周年慶典',
					Ename: 'FESTIVAL',
                    source: '/festival',
				},
				{
					name: '最新消息',
					Ename: 'NEWS',
                    source: '/news',
				},
				{
					name: '聯絡管道',
					Ename: 'CONTACT',
                    source: '/contact',
				},
				{
					name: '關於我們',
					Ename: 'ABOUT',
                    source: '/about',
				}
			],
			text:[
				{
					txt: 'Tibame 緯育牌',
					link: '#',
				},
				{
					txt: '(505) 755-3872'
				},
				{
					txt: 'fakename＠mail.com'
				},
				{
					txt: '666 Damen Circle, Albuquerque, NM 87125'
				},
				{
					txt: '回到緯育',
					link: 'https://www.tibame.com/',
					txt2: '隱私政策',
					link2: '#',
				},
				{
					txt: '本網站為緯育 TibaMe 前端工程師班第 79 期學員專題作品，僅供學習、展示之用。'
				}
			]
		}
	},
	mounted(){
        this.addClassEN(); // 替換英文字形字距
    },
}
</script>
<style scoped lang="scss">
</style>