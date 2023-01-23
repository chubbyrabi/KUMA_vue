<template>
	<div class="product">
        <p>product</p>
        <router-view></router-view>
	</div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

export default {
    name: 'ProductView',
    components: {
        // Header
    },
    metaInfo: {
        title: 'KUMA | 商品情報',
        meta: [
            { name: 'description', content: '這裡是緯育牌 KUMA 系列的綜合商品頁，包含新產品，橡皮擦，修正帶，鉛筆，自動鉛筆等。' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'KUMA | 陪伴你的好橡皮 | 商品' },
            // { property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA/' },
            // { property: 'og:image', content: 'https://raw.githubusercontent.com/chubbyrabi/KUMA/dev/pic/logo/og-img.png' },
            { property: 'og:site_name', content: 'KUMA | 陪伴你的好橡皮 | 商品' },
            { property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' },
        ]
    },
}
</script>
<style scoped lang="scss">
</style>