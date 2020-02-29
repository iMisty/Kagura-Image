<template>
  <div class="index-contact">
    <div class="wrap">
      <router-link to="/contact" class="contact-item">
        <article class="contact-wrap">
          <h3 class="sec-title">有关于服务的任何疑问与回答</h3>
          <h1 class="pri-title">Contact US</h1>
          <p class="text">WEB制作、システム開発、WordPress構築からマーケティング支援まで、制作実績をご覧ください。</p>
        </article>
      </router-link>
      <router-link to="/works" class="contact-item">
        <article class="contact-wrap">
          <h3 class="sec-title">有关于服务的任何疑问与回答</h3>
          <h1 class="pri-title">Works</h1>
          <p class="text">WEB制作、システム開発、WordPress構築からマーケティング支援まで、制作実績をご覧ください。</p>
        </article>
      </router-link>
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
.index-contact {
  padding: 80px 0;
  background-image: url("../../static/img/test6.jpg");
  background-size: cover;
  .wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8rem;
  }
}
.contact-item {
  padding: 4rem;
  text-align: left;
  background-color: #fff;
  color: #000;
}
.contact-wrap{
  position: relative;
  font-weight: 600;
  letter-spacing: .12rem;
  &::after{
    content: '';
    position: absolute;
    background: url(../../static/img/arrow.png) no-repeat;
    background-size: 100%;
    width: 4rem;
    height: 2rem;
    right: 0;
    bottom: 0;
    transition-duration: .4s;
  }
  &:hover::after{
    right: -2rem;
    transition-duration: .4s;
  }
  .sec-title{
    font-size: 1.6rem;
  }
  .pri-title{
    text-transform: uppercase;
    font-size: 3.8rem;
    font-weight: 900;
    line-height: 2.8;
  }
  .text{
    width: 84%;
    margin: 0;
    line-height: 2;
  }
}
</style>