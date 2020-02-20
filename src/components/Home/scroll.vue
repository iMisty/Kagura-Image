<template>
  <div class="scroll">
    <h3>Scroll Down</h3>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
  //组件
  components: {},
  //静态
  props: {},
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
.scroll {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  bottom: 2rem;
  right: 2rem;
  font-size: 1.6rem;
  writing-mode: tb;
  .line {
    position: relative;
    width: 1px;
    height: 10rem;
    margin-top: 1rem;
    background-color: #2d3e4f4f;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 10rem;
      background-color: #fff;
      top: -100%;
      animation: scroll ease-in-out 1.6s infinite;
    }
  }
}
</style>
