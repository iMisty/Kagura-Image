<template>
  <div id="app">
    <div id="nav">
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
    </div>
    <router-view />
  </div>
</template>

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
  z-index: 4;
  font-size: 2rem;
  .nav-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 4%;
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
  transition-duration: .4s;
  &:hover a{
    filter: opacity(.4);
    transition-duration: .4s;
  }
  a {
    position: relative;
    padding: 0 16px;
    font-size: 1.6rem;
    text-transform: uppercase;
    transition-duration: .4s;
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
    &:hover{
      filter: opacity(1);
    }
  }
}
</style>
