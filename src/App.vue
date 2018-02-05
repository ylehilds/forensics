<template>
  <div id="app">
    <vue-tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />
    <router-nav/><router-view/>
    <img src="./assets/logo.png">
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        {
          name: 'Hello World', children: [
            {name: 'Test 1', href: '#/'},
            {name: 'Test 2', href: '#/'}
          ]
        },
        {name: 'Packet Analysis', href: '#/PacketAnalysis'}
      ],
      defaultOpenLevel: 1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
