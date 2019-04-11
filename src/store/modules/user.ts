import { getModule, Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { Food } from '@/store/modules/food';
import { store } from '@/store';

// const foodStore = getModule(Food);

@Module({
  store,
  name: 'user',
  namespaced: true,
  dynamic: true,
})
export class User extends VuexModule {
  public count = 42;
  private foodStore = getModule(Food);

  get countNumber() {
    return this.count;
  }

  @Mutation
  public increment(delta: number) {
    this.count += delta;
  }
  @Mutation
  public decrement(delta: number) {
    this.count -= delta;
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' })
  public incr(delta: number) {
    this.foodStore.increment(1);
    // this.context.rootState.foodStore.increment(2);
    // this.context.rootState.foodStore.increment(1);
    // this.modules.foodStore.mutations.increment(1);
    return delta;
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action
  public decr(delta: number) {
    this.decrement(delta);
  }
}
