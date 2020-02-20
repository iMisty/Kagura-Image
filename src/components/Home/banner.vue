<template>
  <div class="index-banner">
    <img :src="link" :alt="name" />
    <div class="banner-text">
      <slot></slot>
			<div class="banner-extra-text">{{intro}}</div>
    </div>
    <scroll></scroll>
  </div>
</template>

<script>
import scroll from './scroll';
export default {
  //组件
  components: {
    scroll
  },
  //静态
  props: {
    link: String,
		name: String,
		intro: {
			type: String,
			default: '创造所能创造的一切'
		}
  },
  //对象内部的属性监听，也叫深度监听
  watch: {},
  //属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {
    background() {
      return {};
    }
  },
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {},
  //请求数据
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.index-banner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  img {
    position: absolute;
    left: 0;
    max-width: 100%;
    width: 60vw;
    height: 100%;
    object-fit: cover;
    filter: brightness(.84);
  }
}
.banner-text {
  position: relative;
  left: 8%;
  font-size: 8rem;
  font-weight: 400;
  font-family: "Playfair Display";
  font-style: italic;
  color: #000;
  //mix-blend-mode: difference;
  letter-spacing: 0.18rem;
  z-index: 4;
}
.banner-extra-text{
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.2;
}
</style>