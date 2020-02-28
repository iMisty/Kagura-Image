<template>
  <div class="index-records">
    <div class="index-records-wrap wrap">
      <Title :priTitle="title.pri" :smallTitle="title.sub"></Title>
      <div class="index-records-list">
        <record-list
          :link="record.link"
          :imgLink="record.imgLink"
          :authorName="record.author.name"
          :authorImg="record.author.img"
          :date="record.date"
          :title="record.title"
          :text="record.text"
        ></record-list>
        <record-list
          :link="record.link"
          :imgLink="record.imgLink"
          :authorName="record.author.name"
          :authorImg="record.author.img"
          :date="record.date"
          :title="record.title"
          :text="record.text"
        ></record-list>
        <record-list
          :link="record.link"
          :imgLink="record.imgLink"
          :authorName="record.author.name"
          :authorImg="record.author.img"
          :date="record.date"
          :title="record.title"
          :text="record.text"
        ></record-list>
      </div>
    </div>
    <more></more>
  </div>
</template>

<script>
import Title from "@/components/Global/title.vue";
import recordList from "@/components/Home/recordList.vue";
import more from "@/components/Home/more.vue";
export default {
  //组件
  components: {
    Title,
    more,
    recordList
  },
  //静态
  props: {
    title: {
      type: Object
    }
  },
  //保存数据用
  data() {
    return {
      record: {
        link: "#",
        imgLink: require("@/static/img/test3.jpg"),
        author: {
          name: "Admin",
          img: require("@/static/img/test3.jpg")
        },
        date: '2020-02-27',
        title: "Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title"
        //text: ''
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
.index-records {
  padding-top: 80px;
  padding-bottom: 80px;
}
.index-records-list {
  display: grid;
  grid-gap: 12rem;
  padding: 5rem 0;
}
</style>