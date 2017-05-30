import Vue from 'vue'
import { goodsNav } from '../getters'

export const SET_DB_GOODS = (state, data) => {
  Vue.set(state.db, 'goods', data)
  state.goods.nav.currentPage = 1
}

export const SET_DB_PRICES = (state, data) => {
  Vue.set(state.db, 'prices', data)
}

export const SET_DB_GROUPS = (state, data) => {
  Vue.set(state.db, 'groups', data)
}

export const SET_GOODS_FILTER = (state, filter) => {
  state.goods.filter = filter.toLowerCase()
  SET_GOODS_LIST_PAGE(state, state.goods.nav.currentPage)
}

export const LOAD_GROUPS_LIST = (state, items) => {

}

export const SET_GROUPS_FILTER = (state, filter) => {
  state.groups.filter = filter.toLowerCase()
}

export const ADD_SELECTED_GROUP = (state, group) => {
  state.groups.selected = _.union(state.groups.selected, [group])
}

export const REMOVE_SELECTED_GROUP = (state, group) => {
  state.groups.selected = _.xor(state.groups.selected, [group])
}

export const SET_GOODS_LIST_PAGE = (state, page) => {
  const pages = goodsNav(state).pages
  if (page > 0 && page <= pages) {
    state.goods.nav.currentPage = page
  }
}

export const SET_GOODS_LIST_PER_PAGE = (state, perPage) => {
  state.goods.options.perPage = parseInt(perPage) || 20
  let currentPage = goodsNav(state).currentPage
  if (currentPage != state.goods.nav.currentPage) {
    state.goods.nav.currentPage = currentPage
  }
}
