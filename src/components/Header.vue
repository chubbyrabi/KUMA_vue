<template>
	<header>
        <div class="navbar">
            <h1 class="nav-logo">
                <router-link to="/" style="font-size:0;">KUMA | 陪伴你的好橡皮
                    <svg class="KUMA-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182 50">
                        <polygon points="39.52 3.5 25.72 3.5 13.88 18.17 13.88 3.5 2.8 3.5 2.8 47.45 13.88 47.45 13.88 29.7 15.07 29.7 28.31 47.45 41.79 47.45 23.33 23.27 39.52 3.5"/>
                        <path d="M68.1,28.64c0,3.18-.61,5.59-1.81,7.15a5.94,5.94,0,0,1-5,2.18,5.75,5.75,0,0,1-5-2.25c-1.21-1.02-1.82-4.09-1.82-7.36V3.5H43.4V28.56c0,6.35,1.54,11.3,4.57,14.72s7.55,5.22,13.29,5.22,10.23-1.78,13.33-5.3,4.59-8.48,4.59-14.92V3.5H68.1Z"/>
                        <polygon points="109.17 19.28 96.93 3.5 86.6 3.5 86.6 47.45 97.67 47.45 97.67 21.18 108.19 34.51 110.14 34.51 120.73 21.16 120.73 47.45 131.81 47.45 131.81 3.5 121.48 3.5 109.17 19.28"/>
                        <polygon points="157.21 23.09 166.97 47.45 179.2 47.45 160.1 3.5 154.18 3.5 135.51 47.45 147.45 47.45 157.21 23.09"/>
                    </svg>
                </router-link>
            </h1>
            <div class="nav-hb"
                @click="menu_switch =! menu_switch"
                :class="{on: menu_switch == true}"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav class="nav-menu" v-show="menu_switch == true">
                <ul class="parent-list">
                    <router-link to="/" style="font-size:0;">
                        <svg class="KUMA-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182 50">
                            <polygon points="39.52 3.5 25.72 3.5 13.88 18.17 13.88 3.5 2.8 3.5 2.8 47.45 13.88 47.45 13.88 29.7 15.07 29.7 28.31 47.45 41.79 47.45 23.33 23.27 39.52 3.5"/>
                            <path d="M68.1,28.64c0,3.18-.61,5.59-1.81,7.15a5.94,5.94,0,0,1-5,2.18,5.75,5.75,0,0,1-5-2.25c-1.21-1.02-1.82-4.09-1.82-7.36V3.5H43.4V28.56c0,6.35,1.54,11.3,4.57,14.72s7.55,5.22,13.29,5.22,10.23-1.78,13.33-5.3,4.59-8.48,4.59-14.92V3.5H68.1Z"/>
                            <polygon points="109.17 19.28 96.93 3.5 86.6 3.5 86.6 47.45 97.67 47.45 97.67 21.18 108.19 34.51 110.14 34.51 120.73 21.16 120.73 47.45 131.81 47.45 131.81 3.5 121.48 3.5 109.17 19.28"/>
                            <polygon points="157.21 23.09 166.97 47.45 179.2 47.45 160.1 3.5 154.18 3.5 135.51 47.45 147.45 47.45 157.21 23.09"/>
                        </svg>
                    </router-link>
                    <li v-for="item in items" :key="item.name">
                        <router-link :to="{path:item.source}">
                            {{item.name}}
                        </router-link>
                        <ul class="child-list">
                            <li v-for="subitem in item.subitems" :key="subitem.name">
                                <router-link :to="{path:item.source + subitem.sub_source}">
                                    {{subitem.name}}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
	</header>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

export default {
    name: 'HeaderView',
    components:{
    },
    data(){
        return{
            menu_switch: false,
            items:[
                {
                    name: '商品情報',
                    source: '/product',
                    subitems:[
                        {
                            name: '．橡皮擦',
                            sub_source: '/eraser',
                        },
                        {
                            name: '．修正帶',
                            sub_source: '/correction_tape',
                        },
                        {
                            name: '．鉛筆',
                            sub_source: '/pencil',
                        },
                        {
                            name: '．自動鉛筆',
                            sub_source: '/graph',
                        },
                    ]
                },
                {
                    name: '周年慶典',
                    source: '/festival',
                    subitems:[
                        {
                            name: '．生日應援',
                            sub_source: '/support',
                        },
                        {
                            name: '．紀念特展',
                            sub_source: '/expo',
                        },
                        {
                            name: '．限定商店',
                            sub_source: '/store',
                        },
                        {
                            name: '．遊行巴士',
                            sub_source: '/tour_bus',
                        },
                    ]
                },
                {
                    name: '最新消息',
                    source: '/news',
                },
                {
                    name: '聯絡管道',
                    source: '/contact',
                },
                {
                    name: '關於我們',
                    source: '/about',
                }
            ],
        }
    },
    created(){
    },
    mounted(){
        this.addClassEN();
    },
    methods:{
    }
}
</script>
<style scoped lang="scss">

</style>