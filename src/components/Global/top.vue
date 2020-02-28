<template>
  <div class="top">
    <div class="top-button" @click="backTop()">
      <svg
        t="1582998447799"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2277"
      >
        <path
          d="M969.1136 95.232H54.8864a26.9312 26.9312 0 0 1 0-54.272h914.2272a26.9312 26.9312 0 1 1 0 53.76zM727.04 983.04H296.96a26.8288 26.8288 0 0 1-26.9312-26.9312V581.5296H135.5776a26.9312 26.9312 0 0 1-18.432-46.4896L493.568 181.9648a26.8288 26.8288 0 0 1 36.7616 0l376.5248 352.9728a26.9312 26.9312 0 0 1-18.432 46.4896H753.9712v374.272A26.8288 26.8288 0 0 1 727.04 983.04z m-403.2512-54.272h376.4224V554.5984A26.8288 26.8288 0 0 1 727.04 527.6672h93.3888L512 238.4896 203.5712 527.6672H296.96a26.8288 26.8288 0 0 1 26.9312 26.9312z"
          fill
          p-id="2278"
        />
      </svg>
    </div>
  </div>
</template>

<script>
let timer = null;
export default {
  //组件
  components: {},
  //静态
  props: {
    step: {
      type: Number,
      default: 64
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
  methods: {
    backTop() {
      // 动画
      timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    }
  },
  //请求数据
  created() {
    let vm = this;
    window.οnscrοll = function() {
      if (document.documentElement.scrollTop > 60) {
        vm.isActive = true;
      } else {
        vm.isActive = false;
      }
    };
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.top {
  filter: invert(1);
  width: 4rem;
  padding: 1rem;
  height: 4rem;
  cursor: pointer;
}
</style>