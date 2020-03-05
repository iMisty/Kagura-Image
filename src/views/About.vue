<template>
  <div class="about">
    <Title :imgLink="title.background"></Title>
    <wrap></wrap>
  </div>
</template>

<script>
import Title from '@/components/About/title.vue';
import wrap from '@/components/About/wrap.vue';
export default {
  //组件
  components: {
    Title,wrap
  },
  //静态
  props: {},
  data(){
    return{
      title:{
        background: require('@/static/img/test1.jpg')
      }
    }
  },
  //对象内部的属性监听，也叫深度监听
  watch: {},
  //属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {},
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {},
  //请求数据
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>