<template>
    <div class="home">
      <ul>
        <li v-for="list in ace" :key="list.index">
          <div v-html="list.content">
            {{list.content}}
          </div>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
          info:{},
          ace:{},
          id:{}
    }
    },
    computed: {},
    watch: {},
    methods: {
      getInfo(){
        this.$axios.post('/api/?json=1')
        .then(res => (
            // eslint-disable-next-line no-console
          this.info = res
        ))
        .then(res => (
          this.ace = res.data.posts
        ))
        // eslint-disable-next-line no-console
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        })
      },
      getID(){
        const a = this.ace;
        // eslint-disable-next-line no-console
        console.log(a);
      }
    },
    created() {},
    mounted() {
      this.getInfo();
      this.getID();
    },
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    }
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>