<template>
  <div class="index-process">
    <Title :priTitle="title"></Title>
    <div class="process-lists">
      <process-list :listNum="num" :ifTranslated="true" :style="{ 'marginTop':Math.random(120)*4+'rem' }"></process-list>
      <process-list :listNum="num" :ifTranslated="true" :style="{ 'marginTop':Math.random(60)*20+'rem' }"></process-list>
      <process-list :listNum="num" :ifTranslated="true" :style="{ 'marginTop':Math.random(120)*4+'rem' }"></process-list>
      <process-list :listNum="num" :ifTranslated="true" :style="{ 'marginTop':Math.random(60)*20+'rem' }"></process-list>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Global/title.vue";
import processList from "@/components/Home/processList.vue";
export default {
  //组件
  components: {
    Title,
    processList
  },
  //静态
  props: {},
  //保存数据用
  data() {
    return {
      title: 'process',
      num: "01"
    };
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
.index-process {
  padding: 80px 2%;
}
.process-lists {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 5rem 0;
}
</style>