import goods from './goods'
import orders from './orders'
import users from './users'
import customers from './customers'

export default {
  ...goods,
  ...orders,
  ...users,
  ...customers
}
