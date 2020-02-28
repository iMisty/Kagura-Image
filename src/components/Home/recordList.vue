<template>
  <div class="records-list-item">
    <div class="records-item-img">
      <a :href="link">
        <img :src="imgLink" :alt="title" />
      </a>
    </div>
    <div class="records-item-text">
      <div class="record-author">
        <div class="author-img">
          <img :src="authorImg" :alt="authorName" />
        </div>
        <div class="author-name">
          <h3>{{authorName}}</h3>
        </div>
      </div>
      <article class="records-wrap">
        <div class="record-title">
          <a :href="link">
            <p>{{date}}</p>
            <h2>{{title}}</h2>
          </a>
        </div>
        <div class="record-text">
          <a :href="link">
            <p>{{text}}</p>
          </a>
        </div>
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
    link: {
      type: String,
      default: "#"
    },
    imgLink: {
      type: String,
      required: true,
      default: "require(@/static/img/test3.jpg)"
    },
    authorName: {
      type: String,
      default: "Admin"
    },
    authorImg: {
      type: String,
      required: true,
      default: "require(@/static/img/test3.jpg)"
    },
    date: {
      type: String,
      default: "9102-02-28"
    },
    title: {
      type: String,
      default:
        "Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title"
    },
    text: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
.records-list-item {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-gap: 4rem;
  grid-auto-flow: row dense;
  grid-template-areas: "img text";
  text-align: left;
  &:nth-child(2n) {
    grid-template-columns: 1fr 1.2fr;
    .records-item-img {
      grid-column-start: 2;
    }
  }
}
.records-item-img {
  transition-duration: 0.4s;
  &:hover {
    a {
      &::before {
        opacity: 1;
        transition-duration: 0.4s;
      }
      img {
        transform: scale(1.04);
        transition-duration: 0.4s;
      }
    }
  }
  a {
    position: relative;
    display: block;
    height: 100%;
    overflow: hidden;
    transition-duration: 0.4s;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 4;
      background-color: rgba(209, 238, 226, 0.32);
      opacity: 0;
      transition-duration: 0.4s;
    }
    img {
      display: block;
      height: 80%;
      max-height: 512px;
      object-fit: cover;
      transition-duration: 0.4s;
    }
  }
}
.records-item-text {
  align-self: end;
  padding-bottom: 4rem;
  .records-wrap {
    position: relative;
    padding: 2rem;
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.16);
    }
  }
  .record-author {
    display: flex;
    align-items: center;
    padding: 3rem 0;
    .author-img {
      width: 6rem;
      height: 6rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 64%;
        object-fit: cover;
      }
    }
    .author-name {
      padding: 0 2rem;
    }
  }
  .record-title {
    a {
      display: block;
      color: #000;
    }
    p {
      font-size: 1.6rem;
      font-weight: 600;
      margin: 0;
    }
    h2 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-size: 4rem;
      font-weight: 800;
      letter-spacing: 0.36rem;
    }
  }
  .record-text {
    a {
      display: block;
      color: #000;
    }
    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      overflow: hidden;
      font-size: 2.4rem;
      font-weight: 600;
    }
  }
}
</style>