<!-- use router-link component for navigation. -->
<!-- specify the link by passing the `to` prop. -->
<!-- `<router-link>` will be rendered as an `<a>` tag by default -->
<template>
  <div id="app">
    <!-- link provided in `to` prop needs to be configured in router/index.ts file -->
    <router-link to="/">Home</router-link> | 
    <router-link to="/Dashboard">Dashboard</router-link>

    <!-- `view` is a string maintained in script class which is appended here to pass as prop
    `:msg` is binding prop which needs to be used at receiving end with `@Prop() msg` -->
    <router-view :msg='view'></router-view>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  view: string = 'Home';
  created() {
    console.log((window as Window)?.performance?.now());
    console.log(`Vue Version: ${Vue.version}`);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
