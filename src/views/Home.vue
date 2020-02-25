<template>
  <div class="home">
    <banner :link="background.link" :name="background.name">
      <div>Test text 1</div>
      <div>Test text 2</div>
    </banner>
    <about :imgLink="background2.link"></about>
    <process></process>
    <intro :articleBG="article.link" :imgAlt="article.name" :darker="true"></intro>
  </div>
</template>

<script>
import banner from "@/components/Home/Banner.vue";
import about from "@/components/Home/About.vue";
import process from "@/components/Home/Process.vue";
import intro from '@/components/Home/Article.vue';

export default {
  components: {
    banner,
    about,
    process,
    intro
  },
  data() {
    return {
      background: {
        link: require("@/static/img/bg.jpg"),
        name: "Logo"
      },
      bannerText: '',
      background2:{
        link: require('@/static/img/test1.jpg')
      },
      article: {
        link: require('@/static/img/article.jpg'),
        name: "Article Background"
      }
    };
  },
  computed: {},
  watch: {
  },
  methods: {
    getInfo() {
      this.$axios
        .post("/api/?json=1")
        .then(
          res =>
            // eslint-disable-next-line no-console
            (this.info = res)
        )
        .then(res => (this.ace = res.data.posts))
        // eslint-disable-next-line no-console
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    getID() {
      const a = this.ace;
      // eslint-disable-next-line no-console
      console.log(a);
    },

  },
  created() {},
  mounted() {
    //this.getInfo();
    //this.getID();
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>