<template>
  <div class="home">
    <banner :link="background.link" :name="background.name">
      <div>Test text 1</div>
      <div>Test text 2</div>
    </banner>
    <about :imgLink="background2.link"></about>
  </div>
</template>

<script>
import banner from "@/components/Home/banner.vue";
import about from "@/components/Home/about.vue";

export default {
  components: {
    banner,
    about
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