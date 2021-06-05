<template>
    <v-card
        elevation="10"
        outlined
        shaped
        class="card-view"
    >
        <v-card-title id="cardTitle">
            {{'title'}}
        </v-card-title>
        <v-card-subtitle id="cardSubtitle">
            {{'sub title'}}
        </v-card-subtitle>
        <v-card-text id="cardText">
            {{'Rangamma Rangamma em pilladu, pattinchukodu anthe aipoindi po'}}
        </v-card-text>
        <v-card-actions>
            <v-btn
                outlined
                rounded
                text
            >
                Click
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CardView extends Vue {
    // setup() {
    //     const title: string = ref('VUE')
    //     return {
    //         title,

    //     }
    // }
}
</script>

<style lang="scss" scoped>
.card-view {
    #cardSubtitle, #cardText {
        text-align: left;
    }
}
</style>