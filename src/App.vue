<template>
	<Header/>
	<router-view/>
    <section>
        <p>整份文件高度：{{docH}}</p><br>
        <p>視窗高度：{{winH}}</p><br>
        <p>視窗寬度：{{winW}}</p><br>
        <p>文件被卷出視窗的高度：{{scrTop}}</p><br>
        <p>元素本身的高度：{{objH}}</p><br>
        <p>元素'頂端'離視窗頂部距離：{{objTop}}</p><br>
        <p>元素'底端'離視窗頂部距離：{{objBtop}}</p><br>
        <p>測試GitHub Actions</p><br>
        <p>測試GitHub Actions</p><br>
    </section>
    <hr>
	<p class="font-14" v-html="text[0].txt+'font-14'"></p>
    <p class="font-16-24em" v-html="text[0].txt+'font-16-24em'"></p>
    <p class="font-16-15em" v-html="text[0].txt+'font-16-15em'"></p>
    <p class="font-16" v-html="text[0].txt+'font-16'"></p>
    <p class="font-18" v-html="text[0].txt+'font-18'"></p>
    <p class="font-20" v-html="text[0].txt+'font-20'"></p>
    <p class="font-24" v-html="text[0].txt+'font-24'"></p>
    <p class="font-28" v-html="text[0].txt+'font-28'"></p>
    <p class="font-32" v-html="text[0].txt+'font-32'"></p>
    <p class="font-36" v-html="text[0].txt+'font-36'"></p>
    <p class="font-36" v-html="text[0].txt+'font-36'"></p>
    <p class="font-40" v-html="text[0].txt+'font-40'"></p>
    <hr>
    <button class="btn-teal">START</button>
    <button class="btn-white">START</button>
    <button class="btn-success">START</button>
    <button class="btn-success_2nd">START</button>
    <button class="btn-danger">START</button>
    <button class="btn-danger_2nd">START</button>
    <hr>
    <li class="font-20" v-for="item in text" :key="item.id" v-html="item.txt+'font-40'">
    </li>
	<Footer/>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default{
	components:{
		Header,
		Footer,
	},
    data(){
        return{
			text:[
                {
                    id: '001',
                    txt:'KUMA 測試文字',
                },
                {
                    id: '002',
                    txt:'KUMA 測試文字',
                }
            ],
            docH: 0,    // 整份文件高度
            winH: 0,    // 視窗高度
            winW: 0,    // 視窗寬度
            scrTop: 0,  // 文件被卷出視窗的高度
            objH: 0,    // 元素本身的高度
            objTop: 0,  // 元素'頂端'離視窗頂部距離
            objBtop: 0, // 元素'底端'離視窗頂部距離
        }
    },
    created(){
    },
    mounted(){
        this.addClassEN(); // 替換英文字形字距
        this.getValues();
        window.addEventListener('scroll', this.getValues); // 監聽滑鼠滾動
        window.addEventListener('resize', this.getValues); // 監聽視窗大小
    },
    methods:{
        getValues(){
            const section = document.querySelector('section');
            this.docH = document.body.scrollHeight;             // 整份文件高度
            this.winH = window.innerHeight;                     // 視窗高度
            this.winW = window.innerWidth;                      // 視窗寬度
            this.scrTop = window.scrollY;                       // 文件被卷出視窗的高度
            // this.scrTop = window.pageYOffset;
            this.objH = section.offsetHeight;                   // 元素本身的高度
            this.objTop = section.getBoundingClientRect().top;  // 元素'頂端'離視窗頂部距離
            this.objBtop = this.objTop + this.objH;             // 元素'底端'離視窗頂部距離
        }
    },
    beforeDestroy(){
        // 在組件銷毀之前移除監聽事件，避免再次使用時繼續監聽事件，造成資源浪費
        window.removeEventListener('scroll', this.getValues);
        window.removeEventListener('resize', this.getValues);
    }
}
</script>

<style lang="scss">
	@import "../src/assets/css/reset.css";
	@import '../src/assets/scss/style.scss';
	@import '../src/assets/scss/layout/header';
	@import '../src/assets/scss/layout/footer';
</style>