<template>
  <div class="about-title">
    <div class="wrap">
      <div class="left">
        <h1 class="title-en">{{titleEN}}</h1>
        <h2 class="title-zh">{{titleZH}}</h2>
      </div>
      <div class="right">
        <img :src="imgLink" :alt="titleEN" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //组件
  components: {},
  //静态
  props: {
    titleEN: {
      type: String,
      default: "About us"
    },
    titleZH: {
      type: String,
      default: "プロジェクト概要"
    },
    imgLink: {
      type: String,
      default: ""
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
.about-title {
  padding-top: 16rem;
  padding-bottom: 16rem;
  .wrap {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    .left {
      display: grid;
      grid-template-rows: 32% auto;
      .title-en {
        align-self: flex-end;
        font-size: 8rem;
        font-family: "Playfair Display";
        font-style: italic;
        letter-spacing: 0.18rem;
      }
      .title-zh {
        writing-mode: tb;
        align-self: baseline;
        justify-self: center;
        font-size: 3rem;
        letter-spacing: 0.18rem;
      }
    }
    .right {
      height: 64rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>