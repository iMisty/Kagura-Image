<template>
  <div id="app">
    <nav id="nav" :class="{ 'js-fixed': navBg }">
      <div class="nav-wrap">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="Logo" />
        </div>
        <div class="navbar">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/blogs">Blog</router-link>
          <router-link to="/works">Works</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import BufferAnimation from "vue-scroll-buffer";
export default {
  components: {},
  data() {
    return {
      navBg: false,
      scroll: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    getScroll() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      // eslint-disable-next-line no-console
      console.log(this.scroll);
      // eslint-disable-next-line no-console
      console.log(this.navBg);
      if (this.scroll >= 300) {
        this.navBg = true;
      } else {
        this.navBg = false;
      }
    }
  },
  created() {},
  mounted() {
    //BufferAnimation(10);
    window.addEventListener("scroll", this.getScroll);
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  width: 100%;
  z-index: 12;
  font-size: 2rem;
  transition-duration: .4s;
  .nav-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 4%;
    transition-duration: .4s;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navbar {
  transition-duration: 0.4s;
  &:hover a {
    filter: opacity(0.4);
    transition-duration: 0.4s;
  }
  a {
    position: relative;
    padding: 0 16px;
    font-size: 1.6rem;
    text-transform: uppercase;
    transition-duration: 0.4s;
    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 72%;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.38);
      transform: rotate(30deg);
    }
    &:last-child::after {
      width: 0;
      height: 0;
    }
    &:hover {
      filter: opacity(1);
    }
  }
}
#nav.js-fixed{
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
  transition-duration: .4s;
  .nav-wrap{
    padding: 8px 2%;
    transition-duration: .4s;
  }
}
</style>
