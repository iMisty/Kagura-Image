<template>
  <div class="blogs">
    <div class="wrap">
      <inner-title :imgLink="title.background"></inner-title>
      <div class="record-list">
        <list></list>
        <list></list>
        <list></list>
        <list></list>
        <list></list>
        <list></list>
        <list></list>
        <list></list>
      </div>
    </div>
  </div>
</template>

<script>
import innerTitle from "@/components/Global/inner-title.vue";
import list from "@/components/Blogs/list.vue";
export default {
  components: {
    innerTitle,
    list
  },
  data() {
    return {
      title: {
        background: require("@/static/img/test1.jpg")
      }
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.record-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 6rem;
	text-align: left;
	padding-top: 40px;
	padding-bottom: 80px;
  p {
    margin: 0;
  }
}
</style>