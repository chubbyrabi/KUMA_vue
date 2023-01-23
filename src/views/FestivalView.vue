<template>
	<div class="festival">
        <p>festival</p>
        <router-view></router-view>
	</div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

export default {
    name: 'FestivalView',
    components: {
    // Header
    },
    metaInfo: {
        title: 'KUMA | 周年慶典',
        meta: [
            // { name: 'description', content: 'KUMA 五十歲生日啦！為了紀念這個特別的日子，我們即將舉辦一場盛大的慶典，邀您一起參加！' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'KUMA | 陪伴你的好橡皮 | 50 周年慶典' },
            // { property: 'og:url', content: 'https://chubbyrabi.github.io/KUMA/' },
            // { property: 'og:image', content: 'https://raw.githubusercontent.com/chubbyrabi/KUMA/dev/pic/logo/og-img.png' },
            { property: 'og:site_name', content: 'KUMA | 陪伴你的好橡皮 | 50 周年慶典' },
            { property: 'og:description', content: '陪你走過人生中的大小時刻，當你有需要，我們一直都在｜KUMA' },
        ]
    },
}
</script>
<style scoped lang="scss">
</style>