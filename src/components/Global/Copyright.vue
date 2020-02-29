<template>
  <div class="copyright">
    <div class="wrap">
      <p class="icp" v-show="icp !== '粤ICP备-备你妈的案'">{{icp}}</p>
      <p class="copyright-text">© {{dateStart}} - {{dateNow}} {{copyright}} All Rights Reserved.</p>
    <top></top>
    </div>
  </div>
</template>

<script>
import top from '@/components/Global/top.vue';
export default {
  //组件
  components: {
    top
  },
  //静态
  props: {
    icp: {
      type: String,
      default: "粤ICP备-备你妈的案"
    },
    copyright: {
      type: String,
      default: "ShizuEn Collection Studio"
    },
    dateStart: {
      type: Number,
      default: 2005
    }
  },
  //保存数据用
  data() {
    return {
      dateNow: ""
    };
  },
  //对象内部的属性监听，也叫深度监听
  watch: {},
  //属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {},
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {
    getDate() {
      const date = new Date();
      const year = date.getFullYear();
      this.$data.dateNow = year;
    }
  },
  //请求数据
  created() {},
  mounted() {
    this.getDate();
  }
};
</script>

<style lang='less' scoped>
.copyright {
  background: #222;
  color: #a8a8a8;
  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    margin: 0;
  }
}
</style>