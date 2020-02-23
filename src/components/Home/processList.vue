<template>
  <div class="process-list-item">
    <div class="list-top">
      <div class="list-num">{{listNum}}</div>
      <div class="list-title">{{listTitle}}</div>
    </div>
    <div class="list-medium">
      <img :src="listImg" :alt="listTitle" />
    </div>
    <div class="list-bottom">
      <p class="list-text">{{listText}}</p>
      <p class="list-extra-text" v-if="ifTranslated">{{listTextTranslated}}</p>
    </div>
  </div>
</template>

<script>
export default {
  //组件
  components: {},
  //静态
  props: {
    listNum: String,
    listTitle: {
      type: String,
      default: "Lorem Title"
    },
    listImg: {
      type: String,
      default:
        "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNyaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTBiYmU4ZTctMWE1MS1lMTQ1LTkyMjEtODhmODA4NTQzMzdlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI4MjMzMEZFNENCRjExRUFCRkM5QTJBMDc1RURDRUNFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI4MjMzMEZENENCRjExRUFCRkM5QTJBMDc1RURDRUNFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFREZCOUNERTlBNDExMUU4QUNBRTkxODNFOEJFQzIxQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFREZCOUNERjlBNDExMUU4QUNBRTkxODNFOEJFQzIxQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIABAAEAMBEQACEQEDEQH/xABZAAADAQAAAAAAAAAAAAAAAAABAgMIAQEBAAAAAAAAAAAAAAAAAAAAARAAAgEEAgMAAAAAAAAAAAAAARECACExQVESYZEDEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDQEWI4Pl2VQHt2wHLYG/dBEmdgWzgK1A0fnZpnh0H/2Q=="
    },
    listText: {
      type: String,
      default:
        " 而压教军海结文土亲，划压内维弦呀位。 已阶八志开音组一流，效率看步划员品，十改U近白呆或。 "
    },
    ifTranslated: {
      type: Boolean,
      default: true
    },
    listTextTranslated: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
.process-list-item {
  .list-top {
    position: relative;
    .list-num {
      position: absolute;
      top: -6rem;
      left: 2rem;
      font-family: "PlayFair Display";
      font-style: italic;
      font-size: 9rem;
      letter-spacing: 0.2rem;
      z-index: -1;
      color: rgba(0, 0, 0, 0.12);
    }
    .list-title{
      font-size: 3.2rem;
      font-weight: 600;
    }
  }
  .list-medium{
    margin: 2rem 0;
    max-width: 200px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 64%;
      object-fit: cover;
    }
  }
  .list-bottom{
    .list-text{
      font-weight: 600;
    }
    .list-extra-text{
      text-align: left;
    }
  }
}
</style>