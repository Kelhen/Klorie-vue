<template>
  <div id="app">
    <div class="header">header</div>
    <router-view></router-view>
    <div class="footer">footer</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
