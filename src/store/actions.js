    setError ({commit}, error) {
      commit('setError', error)
      setTimeout(() => {commit('clearError')}, 2000)
    },
    clearError ({commit}) {
      commit('clearError')
    },
    loadGoodsList ({commit, state}) {
      dbGoods.getGoodsList({
        orderBy: state.goodsOptions.orderBy,
        startAt: state.goodsOptions.lastKey,
        perPage: state.goodsOptions.perPage,
        order: state.order
      })
      .then(items => {
        commit('loadGoodsList', items)
      })
      .catch(err => {
        console.log(err)
        commit('setError', err)
      })
    },
    setOrderListNextPage ({dispatch, commit, state}) {
      commit('setOrderListNextPage')
      dispatch('loadGoodsList')
    },
    setOrderListPrevPage ({dispatch, commit, state}) {
      if (state.goodsOptions.currentPage > 1) {
        commit('setOrderListPrevPage')
        dispatch('loadGoodsList')
      }
    },
    setOrderListFirstPage ({dispatch, commit, state}) {
      if (state.goodsOptions.currentPage > 1) {
        commit('setOrderListFirstPage')
        dispatch('loadGoodsList')
      }
    },
    updateOrder ({dispatch, commit, state}, {good, qty}) {
      // console.log(good, qty)
      commit('updateOrder', {good, qty})
    },
    clearOrder ({commit}) {
      commit('clearOrder')
    },
    signIn ({commit}, {email, pass}) {
      dbAuth.signIn({email, pass}).then(r => {
        console.log(r)
        commit('signIn', r )
      })
      .catch(err => {
        dispatch('setError', err)
      })
    },
    signOut ({commit}) {
      dbAuth.signOut().then(r => {
        commit('signOut')
      })
    }