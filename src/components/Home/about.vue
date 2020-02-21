<template>
  <div class="index-about">
    <div class="mask"></div>
    <div class="about-title">
      <h1>About us</h1>
    </div>
    <div class="about-wrap">
      <div class="about-top">
        <h1>{{topTitle}}</h1>
        <p>{{topText}}</p>
      </div>
      <div class="about-bottom">
        <div class="left">
          <img :src="imgLink" :alt="imgAlt" />
        </div>
        <div class="right">
          <h2>{{bottomTitle}}</h2>
          <p>{{bottomText}}</p>
          <more :access="about"></more>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import more from "./more.vue";
export default {
  //组件
  components: {
    more
  },
  //静态
  props: {
    topTitle: {
      type: String,
      default: "测试标题 1 测试标题 1 测试标题 1"
    },
    topText: {
      type: String,
      default:
        "测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1测试文本 1 测试文本 1 测试文本 1"
    },
    bottomTitle: {
      type: String,
      default: "测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 测试标题 2 "
    },
    bottomText: {
      type: String,
      default:
        "测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 测试文本 2 "
    },
    imgLink: {
      type: String,
      default: ""
    },
    imgAlt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      about: "/about"
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
.index-about {
  position: relative;
  display: grid;
  grid-template-columns: 16% auto;
  margin: 80px 0;
  padding: 80px 2%;
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-image: url("data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNyaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTBiYmU4ZTctMWE1MS1lMTQ1LTkyMjEtODhmODA4NTQzMzdlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI4MjMzMEZFNENCRjExRUFCRkM5QTJBMDc1RURDRUNFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI4MjMzMEZENENCRjExRUFCRkM5QTJBMDc1RURDRUNFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFREZCOUNERTlBNDExMUU4QUNBRTkxODNFOEJFQzIxQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFREZCOUNERjlBNDExMUU4QUNBRTkxODNFOEJFQzIxQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIABAAEAMBEQACEQEDEQH/xABZAAADAQAAAAAAAAAAAAAAAAABAgMIAQEBAAAAAAAAAAAAAAAAAAAAARAAAgEEAgMAAAAAAAAAAAAAARECACExQVESYZEDEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDQEWI4Pl2VQHt2wHLYG/dBEmdgWzgK1A0fnZpnh0H/2Q==");
    z-index: -1;
    filter: opacity(0.6);
  }
}
.about-wrap {
  text-align: left;
}
.about-top {
  width: 84%;
  padding-left: 4rem;
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin: 2rem 0;
    font-weight: 600;
    font-size: 2em;
  }
}
.about-bottom {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  .left {
    img {
      max-width: 96%;
    }
  }
  .right {
    margin-top: 4rem;
    width: 96%;
    h2{
      font-size: 2.6em;
    }
    p{
      font-size: 2em;
      font-weight: 600;
    }
  }
}
.about-title {
  display: flex;
  align-items: center;
  font-family: "Playfair Display";
  font-style: italic;
  letter-spacing: 0.24rem;
  writing-mode: tb;
  h1 {
    font-size: 6rem;
  }
}
</style>