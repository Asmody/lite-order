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

export const SET_GOODS_PER_PAGE = (state, perPage) => {
  state.goods.options.perPage = perPage || 20
  let currentPage = goodsNav(state).currentPage
  if (currentPage != state.goods.nav.currentPage) {
    state.goods.nav.currentPage = currentPage
  }
}

export const SET_GOODS_FILTER = (state, filter) => {
  state.goods.filter = filter.toLowerCase()
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

export const SET_GOODS_LIST_LAST_PAGE = (state) => {
  let pages = goodsNav(state).pages
  if (state.goods.nav.currentPage < pages) {
    state.goods.nav.currentPage = pages
  }
}
export const SET_GOODS_LIST_NEXT_PAGE = (state) => {
  let pages = goodsNav(state).pages
  if (state.goods.nav.currentPage < pages) {
    state.goods.nav.currentPage++
  }
}
export const SET_GOODS_LIST_PREV_PAGE = (state) => {
  if (state.goods.nav.currentPage > 1) {
    state.goods.nav.currentPage--
  }
}
export const SET_GOODS_LIST_FIRST_PAGE = (state) => {
  state.goods.nav.currentPage = 1
}
