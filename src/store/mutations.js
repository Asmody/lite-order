    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = ''
    },
    loadGoodsList (state, items) {
      state.goodsList = items
      if (items.length > 0) {
        state.goodsOptions.lastKey = items.slice(-1)[0][state.goodsOptions.orderBy]
      } else {
        state.goodsOptions.lastKey = ''
      }

    },
    setOrderListLastPage (state) {
      if (!state.goodsOptions.lastPage) {
        state.goodsOptions.currentPage++
      }
    },
    setOrderListNextPage (state) {
      if (!state.goodsOptions.lastPage) {
        state.goodsOptions.currentPage++
      }
    },
    setOrderListPrevPage (state) {
      if (state.goodsOptions.currentPage > 1) {
        state.goodsOptions.lastPage = false
        state.goodsOptions.currentPage--
      }
    },
    setOrderListFirstPage (state) {
      state.goodsOptions.lastPage = false
      state.goodsOptions.currentPage = 1
    },
    updateOrder (state, {good, qty}) {
      Vue.set(state.order,
        good['.key'],
        {
          good: good,
          price: good.price,
          qty: qty,
        }
      )
    },
    clearOrder (state) {
      state.order = {}
    },
    signIn (state) {

    },
    signOut (state) {
      Vue.set(state, 'auth', { user: '', sess: null})
    },