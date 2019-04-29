<template>
  <div class="content m-4">
    <AutoComplete
      :data="data"
      @on-search="searchUser"
      placeholder="search user"
      style="width:200px"
      v-model="select"
    >
      <Option v-for="(item, index) in data" :value="item.name" :key="index">{{ item.name }}</Option>
    </AutoComplete>
    <Button type="primary" @click="fetchData">Fetch data</Button>
    <p class="bg-blue" v-for="user in users" :key="user.id">{{ user.name }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// gql
import USERS from '@/graphql/queries/Users.gql';
// store
import { getModule } from 'vuex-module-decorators';
import { Example } from '@/store/modules/example';
// types
import { UserFields } from '@/types/graphql/schemaTypes';

@Component({
  components: {},
})
export default class Home extends Vue {
  public users: UserFields[] = [];
  public select = '';
  public exampleStore = getModule(Example, this.$store);
  public data: UserFields[] = [];

  public fetchData() {
    this.$Loading.start();
    this.$apollo
      .query({ query: USERS })
      .then((response) => {
        this.users = response.data.users;
        this.exampleStore.incr(1);
        this.$Loading.finish();
      })
      .catch(() => {
        this.$Loading.error();
      });
  }

  public searchUser(value: string) {
    this.$apollo
      .query({
        query: USERS,
        variables: {
          where: {
            name_in: value,
          },
        },
      })
      .then((response: any) => {
        this.data = response.data.users;
      });
  }
}
</script>
