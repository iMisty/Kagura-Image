<template>
  <div class="index-article" :style="{backgroundImage: `url(${articleBG})`}">
    <div class="index-article-wrap wrap">
      <Title :priTitle="title" :smallTitle="smallTitle"></Title>
      <div class="left">
        <div class="left-pri-text">
          <h2>{{leftText.pri}}</h2>
        </div>
        <div class="left-sec-text">
          <p>{{leftText.sec}}</p>
        </div>
      </div>
      <div class="right">
        <div class="right-pri-text">
          <h3>{{rightText.pri}}</h3>
        </div>
        <div class="right-sec-text">
          <p>{{rightText.sec}}</p>
        </div>
        <more :access="works"></more>
      </div>
    </div>
    <div class="index-article-bg" :class="{'js-darker': darker}"></div>
  </div>
</template>

<script>
import Title from "@/components/Global/title.vue";
import more from "@/components/Home/more.vue";
export default {
  //组件
  components: {
    Title,
    more
  },
  //静态
  props: {
    imgLink: {
      type: String,
      default: ""
    },
    imgAlt: {
      type: String,
      default: ""
    },
    articleBG: {
      type: String,
      default: ""
    },
    priTitle: {
      type: String,
      default: ""
    },
    darker: {
      type: Boolean,
      default: true
    }
  },
  //保存数据用
  data() {
    return {
      works: "/works",
      title: "Article",
      smallTitle: false,
      leftText: {
        pri: `アーティストは、学びと尊敬を。
          職人は、交流と挑戦を。`,
        sec: `Artists: opportunity to learn and cultivate respect towards Japanese crafts.
          Japanese shokunin craftsmen: opportunity to collaborate and experiment.`
      },
      rightText: {
        pri:
          "アーティストが作品を作って終わりではなく、職人と対等に一つのチームとなって、今までになかった丹後ちりめんのプロダクトを生み出します。無数のマッチングの中から生まれた、このプロジェクトだけの特別なチームが出来上がりました。",
        sec:
          "This was not a project for artist to merely create works; it was a chance for participants to create new products with Tango Chirimen, by balancing teams of artists and local craftsmen. Specific, one-off teams were created from an indefinite number of pairings."
      }
    };
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
.index-article {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.index-article-wrap {
  position: relative;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: left;
  z-index: 4;
  color: #fff;
  .title {
    grid-column-start: span 2;
    justify-self: left;
  }
}
.index-article-bg {
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100%;
}
.js-darker {
  background-color: rgba(0, 0, 0, 0.64);
}
.left-pri-text {
  h2 {
    font-size: 4em;
  }
}
.left-sec-text{
  p{
    font-size: 3em;
  }
}
.right-pri-text{
  h3{
    font-size: 3.2em;
  }
}
.right-sec-text{
  p{
    font-size: 3em;
  }
}
</style>