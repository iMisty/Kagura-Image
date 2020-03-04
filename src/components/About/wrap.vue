<template>
<div class="about-wrap">
  <a-text></a-text>
  <history></history>
</div>
</template>

<script>
import text from '@/components/About/text.vue';
import history from '@/components/About/history.vue';
export default {
//组件
 components: {
   'a-text':text ,history
 },
//静态
 props: {
 },
//保存数据用
 data() {
   return{
   }
 },
//对象内部的属性监听，也叫深度监听
 watch: {
 },
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
 computed: { 
 },
//方法表示一个具体的操作，主要书写业务逻辑；
 methods: { 
 },
//请求数据
 created() {
},
 mounted() {
}
}
</script>

<style lang='less' scoped>

</style>