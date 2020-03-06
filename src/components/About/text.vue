<template>
  <div class="about-text">
    <div class="wrap">
      <article class="title">
        <h2>{{priText}}</h2>
        <h3>{{subText}}</h3>
      </article>
      <article class="text">
        <p>{{leftText}}</p>
        <p>{{rightText}}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  //组件
  components: {},
  //静态
  props: {
    priText: {
      type: String,
      default: '300年前から磨かれた丹後ちりめんの技巧とパリで磨かれた'
    },
    subText: {
      type: String,
      default:
        "What happens when you bring together the finesse of Tango Chrimen (locally made silk crêpe which has been perfected for over 300 years) and the fine creations of Paris?"
    },
    leftText: {
      type: String,
      default:
        "2019年よりスタートした「TANGO CREATION PLATFORM」は、丹後が持つ様々な魅力を外に開くことで新たな地域の可能性を模索するプロジェクト。今年度は、2020年に300年を迎える「丹後ちりめん」とパリで活躍する4名のアーティストが滞在と交流を通じ、新たな領域の丹後ちりめんを模索します。丹後の伝統、文化、風土から様々なインスピレーションを受けることで、日本とフランスの感性が混じり合い、新たな「丹後ちりめん」の可能性をプロダクトおよび作品として発表します。"
    },
    rightText: {
      type: String,
      default:
        "Tango Creation Platform was founded in 2019 as a project exploring new possibilities with established strengths in the Tango area. This year the project attempts to find new ventures for Tango Chirimen by bringing together four artists from Paris for a residence and the local industry which has been making silk crêpe for over 300 years.We’re pleased to announce a series of products inspired by Tango’s traditions, culture and natural features, blending the sensitivities of Japan and France together to explore new ideas for Tango Chirimen."
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
.about-text {
  padding-top: 40px;
  padding-bottom: 80px;
  .wrap {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-gap: 2rem;
    text-align: left;
    .title{
      padding: 1.4rem 0;
    }
    .text {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 4rem;
      line-height: 1.8;
    }
    h2{
      font-size: 3.2em;
    }
  }
}
h2,h3,p{
  font-weight: 600;
}
</style>