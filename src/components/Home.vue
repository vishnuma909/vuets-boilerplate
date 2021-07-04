<template>
  <div class="hello">
    <h1 v-once>{{ title }}</h1>
    <card-view :card-data="cardData" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardView from './CardView/CardView.vue';
import { CardViewData } from "./CardView/CardViewTypes";

@Component({
  components: {
    CardView
  }
})
export default class Home extends Vue {
  title: string = "Home";
  cardData: CardViewData = {
    "movieName": "Titanic",
    "movieSubTitle": "Romance/Drama",
    "movieDescription": `Seventeen-year-old Rose hails from an aristocratic family and is set to be married.
    When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin: 0 25%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
