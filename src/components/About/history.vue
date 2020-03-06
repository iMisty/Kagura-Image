<template>
  <div class="history wrap">
    <h1 class="title">{{title}}</h1>
    <ul class="history-wrap">
      <li v-for="history in items" :key="history.index">
        <h3 class="pri-history">{{history.zh}}</h3>
        <h3 class="sec-history">{{history.en}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //组件
  components: {},
  //静态
  props: {
    title: {
      type: String,
      default: "丹後ちりめんとは"
    },
    items: {
      type: Array,
      default: () => [
        {
          zh: `1300年以上前から絹織物が綿々と織り続けられてきた丹後地方では300年前に大きな革新がもたらされた。
それは、丹後ちりめんの誕生である。`,
          en: `
Tango Province of northern Kyoto Prefecture, which has a history of over 1,300 years of woven silk textile, experienced the innovation about 300 years ago; the birth of Tango Chirimen, also known as silk crepe.`
        },
        {
          zh: `1300年以上前から絹織物が綿々と織り続けられてきた丹後地方では300年前に大きな革新がもたらされた。
それは、丹後ちりめんの誕生である。`,
          en: `
Tango Province of northern Kyoto Prefecture, which has a history of over 1,300 years of woven silk textile, experienced the innovation about 300 years ago; the birth of Tango Chirimen, also known as silk crepe.`
        },
        {
          zh: `1300年以上前から絹織物が綿々と織り続けられてきた丹後地方では300年前に大きな革新がもたらされた。
それは、丹後ちりめんの誕生である。`,
          en: `
Tango Province of northern Kyoto Prefecture, which has a history of over 1,300 years of woven silk textile, experienced the innovation about 300 years ago; the birth of Tango Chirimen, also known as silk crepe.`
        }
      ]
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
.history{
  padding-top: 40px;
  padding-bottom: 80px;
  text-align: left;
  h1{
    padding: 4rem 0;
    font-weight: 900;
  }
}
.history-wrap{
  li{
    padding: 3rem 2rem;
    border-left: .5rem solid rgba(0,0,0,.12);
    line-height: 2;
  }
}
h2,h3{
  font-weight: 600;
  letter-spacing: .1rem;
}
</style>