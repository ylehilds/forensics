<template>
  <div id="app">
    <!--<vue-tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />-->
    <!--<router-nav/><router-view/>-->
    <v-app>
      <v-navigation-drawer app>
        <router-link class="list-group-item" to="/">Hello World</router-link>
        <router-link class="list-group-item" to="/PacketAnalysis">Hello World</router-link>
      </v-navigation-drawer>
      <v-toolbar app></v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
          <!--<router-nav/><router-view/>-->
          <!--<vue-tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />-->
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>



    <!--<v-app :dark="true">-->
      <!--<v-navigation-drawer app>-->
        <!--<router-link class="list-group-item" to="/">Hello World</router-link>-->
        <!--<router-link class="list-group-item" to="/PacketAnalysis">Hello World</router-link>-->
      <!--</v-navigation-drawer>-->
      <!--<v-toolbar app> opa</v-toolbar>-->
      <!--<v-content>-->
        <!--<router-view>-->
          <!--<v-container fluid></v-container>-->
        <!--</router-view>-->
      <!--</v-content>-->
      <!--<v-footer app></v-footer>-->
    <!--</v-app>-->
    <img src="./assets/logo.png">
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App'
  // data() {
  //   return {
  //     items: [
  //       {
  //         name: 'Hello World', children: [
  //           {name: 'Test 1', href: '#/'},
  //           {name: 'Test 2', href: '#/'}
  //         ]
  //       },
  //       {name: 'Packet Analysis', href: '#/PacketAnalysis'}
  //     ],
  //     defaultOpenLevel: 1
  //   }
  // }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
