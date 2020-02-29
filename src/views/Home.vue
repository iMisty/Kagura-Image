<template>
  <div class="home">
    <banner :link="background.link" :name="background.name">
      <div>Test text 1</div>
      <div>Test text 2</div>
    </banner>
    <about :imgLink="background2.link"></about>
    <process></process>
    <intro :articleBG="article.link" :imgAlt="article.name" :darker="true"></intro>
    <record :title="record.title"></record>
    <contact></contact>
  </div>
</template>

<script>
import banner from "@/components/Home/Banner.vue";
import about from "@/components/Home/About.vue";
import process from "@/components/Home/Process.vue";
import intro from '@/components/Home/Article.vue';
import record from '@/components/Home/Record.vue';
import contact from '@/components/Home/Contact.vue';

export default {
  components: {
    banner,
    about,
    process,
    intro,
    record,
    contact
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
      },
      record:{
        title:{
          pri: 'Records',
          sub: false
        }
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
    }

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