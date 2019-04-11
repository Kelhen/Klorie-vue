<template>
  <div id="app">
    <div class="header">header</div>
    <div class="content">
      <el-form>
        <el-form-item>
          <el-autocomplete
            class="width-90"
            v-model="select"
            :fetch-suggestions="remoteMethod"
            placeholder="Search User"
            suffix-icon="el-icon-search"
            :highlight-first-item="true"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
      </el-form>
      <!-- <el-button @click="addFood">Fetch data</el-button> -->
      <el-button @click="userStore.decr(2)">-</el-button> {{userStore.count}} <el-button @click="addNum">+</el-button>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Autocomplete, Button, Form, FormItem, InputNumber } from 'element-ui';
import HelloWorld from './components/HelloWorld.vue';
// gql
import USERS from '@/graphql/queries/Users.gql';
import SEARCHUSERS from '@/graphql/queries/SearchUsers.gql';
// types
import { User as UserType } from '@/types/graphql';
// store
import { getModule } from 'vuex-module-decorators';
import { User } from '@/store/modules/user';

@Component({
  components: {
    'el-autocomplete': Autocomplete,
    'el-button': Button,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input-number': InputNumber,
  },
})
export default class App extends Vue {
  private users: UserType[] = [];
  private select: any = '';
  private options: any[] = [];
  private loading = false;
  private userStore = getModule(User, this.$store);
  private num = this.userStore.count;

  private fetchData() {
    this.$apollo.query({ query: USERS }).then((response) => {
      this.users = response.data.users;
    });
  }

  private addNum() {
    this.userStore.incr(1);
  }

  private subNum() {
    this.userStore.decr(1);
  }

  private handleSelect(food: any) {
    return;
  }

  private remoteMethod(search: string, cb: any) {
    if (search !== '') {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$apollo
          .query({
            query: SEARCHUSERS,
            variables: {
              UserWhereInput: {
                name_contains: search,
              },
            },
          })
          .then((response) => {
            this.options = response.data.users.map((user: UserType) => {
              return { value: user.name, id: user.id };
            });
            cb(this.options);
          });
      }, 200);
    } else {
      this.options = [];
      cb(this.options);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  display: flex;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  flex: 1 1 auto;
}
</style>
