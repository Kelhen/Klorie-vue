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

  @Action({ commit: 'increment' })
  public incr(delta: number) {
    return delta;
  }
  @Action
  public decr(delta: number) {
    this.decrement(delta);
  }
}
