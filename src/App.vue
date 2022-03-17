<template>
	<about></about>
</template>
<script>
import about from './views/About.vue'
export default {
  components: { about }
}
</script>

<style lang="scss">
html,body,#app{
	height: 100%;
}
body{
	padding: 0;
	margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
