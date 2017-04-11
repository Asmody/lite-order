import Vue from 'vue'

export const LOAD_DB = (state, {goods, prices, groups}) => {

}

export const SET_DB_GOODS = (state, data) => {
  Vue.set(state.db, 'goods', data)
}

export const SET_DB_PRICES = (state, data) => {
  Vue.set(state.db, 'prices', data)
}

export const SET_DB_GROUPS = (state, data) => {
  Vue.set(state.db, 'goodsGroups', data)
}

export const RECALC_GOODS_NAV = (state, goodsLength) => {
  const perPage = state.goods.options.perPage
  const goodsCount = goodsLength || state.goods.filtered.length || state.db.goods.length
  state.goods.nav.pages = (goodsCount % perPage == 0 ? goodsCount/perPage : Math.floor(goodsCount/perPage)+1)
  if (state.goods.nav.pages > 0) {
    state.goods.nav.currentPage = 1
  }
}

export const LOAD_GOODS_LIST = (state, items) => {
  Vue.set(state.goods, 'list', items)
}

export const SET_GOODS_PER_PAGE = (state, perPage) => {
  state.goods.options.perPage = perPage || 20
  RECALC_GOODS_NAV(state)
}

export const FILTER_GOODS = (state) => {
  if (state.goods.filter || state.groups.selected.length) {
    state.goods.filtered = _.filter(state.db.goods, el => {
      return (!state.goods.filter
          || el.description.toLowerCase().indexOf(state.goods.filter) != -1
          || el.code.toLowerCase().indexOf(state.goods.filter) != -1)
      && (!state.groups.selected.length
          || _.some(state.groups.selected, gr => gr.id == el.groupRef ))
    })
  } else {
    state.goods.filtered = []
  }
  RECALC_GOODS_NAV(state, state.goods.filtered.length)
}

export const SET_GOODS_FILTER = (state, filter) => {
  state.goods.filter = filter.toLowerCase()
  FILTER_GOODS(state)
}

export const LOAD_GROUPS_LIST = (state, items) => {
  if (state.groups.filter) {
    Vue.set(state.groups, 'list', _.filter(items, el => {
      return el.name.toLowerCase().indexOf(state.groups.filter) != -1
    }))
  } else {
    Vue.set(state.groups, 'list', items)
  }
}

export const SET_GROUPS_FILTER = (state, filter) => {
  state.groups.filter = filter
}

export const ADD_SELECTED_GROUP = (state, group) => {
  state.groups.selected = _.union(state.groups.selected, [group])
  FILTER_GOODS(state)
}

export const REMOVE_SELECTED_GROUP = (state, group) => {
  state.groups.selected = _.xor(state.groups.selected, [group])
  FILTER_GOODS(state)
}

export const SET_GOODS_LIST_LAST_PAGE = (state) => {
  if (state.goods.nav.currentPage < state.goods.nav.pages) {
    state.goods.nav.currentPage = state.goods.nav.pages
  }
}
export const SET_GOODS_LIST_NEXT_PAGE = (state) => {
  if (state.goods.nav.currentPage < state.goods.nav.pages) {
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
