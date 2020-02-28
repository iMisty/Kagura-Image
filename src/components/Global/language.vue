<template>
  <div class="language">
    <div class="active-language">简体中文</div>
    <div class="select" v-if="menu === true">
      <div data-language="zh">简体中文</div>
      <div data-language="en">English</div>
      <div data-language="jp">日本語</div>
    </div>
  </div>
</template>

<script>
export default {
  //组件
  components: {},
  //静态
  props: {},
  //保存数据用
  data() {
    return {
      menu: false
    };
  },
  //对象内部的属性监听，也叫深度监听
  watch: {},
  //属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {},
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {
    openMenu(){
      this.$data.menu = !this.$data.menu;
    }
  },
  //请求数据
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.language{
  position: relative;
  font-size: 1.6rem;
  .select{
    position: absolute;
  }
}
</style>