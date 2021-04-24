<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import HelloWorld from './HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
  }
})
class App extends Vue {
  getUserName = (): string => {
    return "MyVueJs"
  }
}
export default App;
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
