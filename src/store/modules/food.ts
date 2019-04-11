import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { store } from '@/store';

@Module({
  store,
  name: 'food',
  namespaced: true,
  dynamic: true,
})
export class Food extends VuexModule {
  public count = 42;

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
    return delta;
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action
  public decr(delta: number) {
    this.decrement(delta);
  }
}
