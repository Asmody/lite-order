    error: state => state.error,
    goods: state => state.goodsList,
    goodsOptions: state => state.goodsOptions,
    order: state => state.order,
    orderTotal: state => {
      return Math.round(
        _.reduce(state.order, (total, item, key) => {
          return total + Math.round(item.price * item.qty * 100) / 100
        }, 0) * 100) / 100
    },
    auth: state => state.auth,
    signedIn: state => true && state.auth.sess,