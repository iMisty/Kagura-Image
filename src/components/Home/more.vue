<template>
  <div class="more-button">
    <router-link :to="access">Read More</router-link>
  </div>
</template>

<script>
export default {
  //组件
  components: {},
  //静态
  props: {
    access: {
      type: String,
      default: "#"
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
.more-button {
  display: inline-flex;
  padding: 2rem 0 0 0;
  font-size: 2.6rem;
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  overflow: hidden;
  a {
    position: relative;
    padding-bottom: 1rem;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #000;
    }
  }
  &:hover{
    a::after{
      animation: readMore ease-in-out .8s;
    }
  }
}
</style>