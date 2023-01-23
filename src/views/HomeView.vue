<template>
	<div class="home">
		<p>home</p>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import Header from '@/components/Header.vue'

	export default {
		name: 'HomeView',
		components: {
		// Header
		},
		metaInfo: {
			title: 'KUMA | 陪伴你的好橡皮',
			meta: [
				{ name: 'description', content: '這裡是緯育牌 KUMA 系列的主頁。我們提供實用且設計精美的文具，陪你度過人生中的大小時刻，不論學習、工作還是創作，KUMA 都是你最好的夥伴！' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'KUMA | 陪伴你的好橡皮' },
				// { property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA/' },
				// { property: 'og:image', content: 'https://raw.githubusercontent.com/chubbyrabi/KUMA/dev/pic/logo/og-img.png' },
				{ property: 'og:site_name', content: 'KUMA | 陪伴你的好橡皮' },
				{ property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' },
			]
		},
	}
</script>
<style scoped lang="scss">
</style>