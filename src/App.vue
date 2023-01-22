<template>
	<Header/>
	<router-view/>
	<p class="font-14" v-html="text+'font-14'"></p>
        <p class="font-16-24em" v-html="text+'font-16-24em'"></p>
        <p class="font-16-15em" v-html="text+'font-16-15em'"></p>
        <p class="font-16" v-html="text+'font-16'"></p>
        <p class="font-18" v-html="text+'font-18'"></p>
        <p class="font-20" v-html="text+'font-20'"></p>
        <p class="font-24" v-html="text+'font-24'"></p>
        <p class="font-28" v-html="text+'font-28'"></p>
        <p class="font-32" v-html="text+'font-32'"></p>
        <p class="font-36" v-html="text+'font-36'"></p>
        <p class="font-40" v-html="text+'font-40'"></p>
        <hr>
        <button class="btn-teal">START</button>
        <button class="btn-white">START</button>
        <button class="btn-success">START</button>
        <button class="btn-success_2nd">START</button>
        <button class="btn-danger">START</button>
        <button class="btn-danger_2nd">START</button>
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
			text:'KUMA 測試文字',
        }
    },
    created(){
    },
    mounted(){
        this.addClassEN();
    },
}

</script>

<style lang="scss">
	@import "../src/assets/css/reset.css";
	@import '../src/assets/scss/style.scss';
	@import '../src/assets/scss/layout/header';
	@import '../src/assets/scss/layout/footer';
</style>
