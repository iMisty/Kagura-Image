<template>
  <div class="title">
    <div class="line"></div>
    <div class="title-wrap">
      <h1 class="pri-title">{{priTitle}}</h1>
      <h2 class="sec-title" v-if="smallTitle">{{secTitle}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  //组件
  components: {},
  //静态
  props: {
    priTitle: {
      type: String,
      default: "lorem title"
    },
    secTitle: {
      type: String,
      default: "lorem title text"
    },
    smallTitle: {
      type: Boolean,
      default: true
    }
  },
  //保存数据用
  data() {
    return {};
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
.line {
  width: 1px;
  height: 8rem;
  background-color: #000;
  margin: 0 auto;
  transform: matrix(1, 0, -0.48, 0.84, 0, 0);
}
.title-wrap {
  .pri-title {
    font-family: "Playfair Display", serif;
    font-size: 6rem;
    font-style: italic;
    font-weight: 600;
    letter-spacing: 0.18rem;
  }
  .sec-title{
    font-size: 3.2rem;
    font-weight: 600;
  }
}
</style>