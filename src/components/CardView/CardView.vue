<template>
    <v-card
        elevation="10"
        outlined
        shaped
        class="card-view"
    >
        <v-card-title id="cardTitle">
            {{cardData.movieName}}
        </v-card-title>
        <v-card-subtitle id="cardSubtitle">
            {{cardData.movieSubTitle}}
        </v-card-subtitle>
        <v-card-text id="cardText">
            {{cardData.movieDescription}}
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
import { defineComponent, ref } from '@vue/composition-api';
import { CardViewData } from './CardViewTypes';

export default defineComponent({
    name: 'CardView',
    props: {
        type: Object,
        cardData: {},
    },
    setup(props: any) {
        const cardData: CardViewData = ref(props.cardData);
        return {
            cardData
        };
    },
});
</script>

<style lang="scss" scoped>
.card-view {
    #cardSubtitle, #cardText {
        text-align: left;
    }
}
</style>