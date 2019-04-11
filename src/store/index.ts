import Vue from 'vue';
import Vuex from 'vuex';

import { User } from '@/store/modules/user';
import { Food } from '@/store/modules/food';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // modules: {
  //   user : User,
  //   food: Food,
  // },
});

