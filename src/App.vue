<template>
  <div id="app">
    <!--<vue-tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />-->
    <!--<router-nav/><router-view/>-->
    <!--<v-app>-->
      <!--<v-navigation-drawer app>-->
        <!--<router-link class="list-group-item" to="/">Hello World</router-link>-->
        <!--<router-link class="list-group-item" to="/PacketAnalysis">Hello World</router-link>-->
      <!--</v-navigation-drawer>-->
      <!--<v-toolbar app></v-toolbar>-->
      <!--<v-content>-->
        <!--<v-container fluid>-->
          <!--<router-view></router-view>-->
          <!--&lt;!&ndash;<router-nav/><router-view/>&ndash;&gt;-->
          <!--&lt;!&ndash;<vue-tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />&ndash;&gt;-->
        <!--</v-container>-->
      <!--</v-content>-->
      <!--<v-footer app></v-footer>-->
    <!--</v-app>-->
    <!--https://vuetifyjs.com/vuetify/quick-start-->
    <!--https://material.io/icons/-->
    <v-app id="inspire">
      <v-navigation-drawer
        fixed
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile v-on:click="routeToGo('/')">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-on:click="routeToGo('PacketAnalysis')">
            <v-list-tile-action>
              <v-icon>search</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Packet Analysis</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-on:click="routeToGo('WindowsForensics')">
            <v-list-tile-action>
              <v-icon>laptop_windows</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Windows Forensics</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-on:click="routeToGo('LinuxForensics')">
            <v-list-tile-action>
              <v-icon>laptop_chromebook</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Linux Forensics</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-on:click="routeToGo('NetworkForensics')">
            <v-list-tile-action>
              <v-icon>router</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Network Forensics</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-on:click="routeToGo('WindowsIntrusion')">
            <v-list-tile-action>
              <v-icon>desktop_windows</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Windows Intrusion</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-on:click="routeToGo('LinuxIntrusion')">
            <v-list-tile-action>
              <v-icon>desktop_mac</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Linux Intrusion</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-on:click="routeToGo('MediaAnalysis')">
            <v-list-tile-action>
              <v-icon>sd_storage</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Media Analysis</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>IT566 Digital Forensics Resource Database</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout
          >
            <!--<v-layout-->
              <!--justify-center-->
              <!--align-center-->
            <!--&gt;-->
            <!--<v-tooltip right>-->
              <!--<v-btn icon large :href="source" target="_blank" slot="activator">-->
                <router-view/>
                <!--<v-icon large>code</v-icon>-->
              <!--</v-btn>-->
              <!--<span>Source</span>-->
            <!--</v-tooltip>-->
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="indigo" app>
        <span class="white--text">&copy; IT566 - Digital Forensics Resource Database - Lehi Alcantara - 2018</span>
      </v-footer>
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
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
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
  methods:
    {
      routeToGo: function (route) {
        // console.log('test')
        // this.$route.path = route
        this.$router.push({path: route, params: { }})
        // <router-link class="list-group-item" to="/">Hello World</router-link>
      }
    }
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
