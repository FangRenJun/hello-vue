<template>
  <div id="app">
    <div id="nav"  v-if="this.location.pathname.indexOf('/clothes') != 0 && this.location.pathname.indexOf('/clothing-list') != 0 ">
      <router-link tag="div" to="/"><span>Measure</span></router-link>
      <router-link tag="div" to="/custom"><span>Custom</span></router-link>
      <router-link tag="div" to="/me"><span>Me</span></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import './assets/iconfont/iconfont.css'
  export default {
    data(){
      return {
        location: window.location,
      }
    }
  }
</script>

<style lang="less">
  .router-link-exact-active{
    color: #a4925a;
  }
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: space-around;
  background: #1c232c;
  width: 100vw;
  color: white;
  span {
    font-weight: bold;
  }
}
</style>
