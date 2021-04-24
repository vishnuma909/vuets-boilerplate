<template>
    <h1>{{message}}</h1>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
class HelloWorld extends Vue{
    @Prop({required: true}) msg!: string;
    message: string = ''
    created() {
        this.message = this.msg;
    }
}
export default HelloWorld;
</script>