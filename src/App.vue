<template>
  <div id="app">
    <el-button @click="fetchData">Fetch data</el-button>
    <p class="bg-blue" v-for="user in users" :key="user.id">{{ user.name }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'element-ui';
import HelloWorld from './components/HelloWorld.vue';
// gql
import USERS from '@/graphql/queries/Users.gql';
// store
import { getModule } from 'vuex-module-decorators';
import { Example } from '@/store/modules/example';

@Component({
  components: {
    'el-button': Button,
  },
})
export default class App extends Vue {
  private users: any[] = [];
  private exampleStore = getModule(Example, this.$store);

  private fetchData() {
    this.$apollo.query({ query: USERS }).then((response: any) => {
      this.users = response.data.users;
      this.exampleStore.incr(1);
    });
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
