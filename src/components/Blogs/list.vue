<template>
  <div class="record-item">
    <div class="record-img">
      <img :src="record.img" :alt="record.title" />
    </div>
    <div class="record-avatar">
      <img :src="record.avatar.img" :alt="record.avatar.id" />
      <p>{{record.avatar.id}}</p>
    </div>
    <div class="record-date">
      <p>{{record.date}}</p>
    </div>
    <div class="record-title">
      <h2>{{record.title}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  //组件
  components: {},
  //静态
  props: {
    record: {
      type: Object,
      default: () => ({
        img: require("@/static/img/article.jpg"),
        title:
          "示例用标题",
        avatar: {
          id: "Admin",
          img: require("@/static/img/test3.jpg")
        },
        date: "2020-02-27"
      })
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
.record-item {
  cursor: pointer;
}
.record-avatar {
  display: flex;
  align-items: center;
  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }
  p {
    margin-left: 2rem;
    font-size: 2.4rem;
    font-weight: 600;
  }
}
.record-title {
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  padding-left: 2rem;
  margin-left: 2rem;
  border-left: 0.5rem solid rgba(0, 0, 0, 0.18);
  h2{
    font-size: 2.6rem;
  }
}
.record-date {
  p {
    margin: 0;
    line-height: 2;
    font-weight: 600;
    font-size: 2.4rem;
  }
}
</style>