import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { store } from '@/store';

@Module({
  store,
  name: 'example',
  namespaced: true,
  dynamic: true,
})
export class Example extends VuexModule {
  public count = 42;

  get countNumber() {
    return this.count;
  }

  @Mutation
  public _increment(delta: number) {
    this.count += delta;
  }
  @Mutation
  public _decrement(delta: number) {
    this.count -= delta;
  }

  @Action({ commit: '_increment' })
  public incr(delta: number) {
    return delta;
  }
  @Action
  public decr(delta: number) {
    this._decrement(delta);
  }
}
