import VuexFire from 'vuexfire'

export default {
  state: {
    goods: []
  },
  mutations: VuexFire.moduleMutations('goods'),
  getters: {
    goods: state => state.goods
  }
}
