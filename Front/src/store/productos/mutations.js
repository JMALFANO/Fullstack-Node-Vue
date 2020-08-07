import {CARGAR_PRODUCTOS } from './types'

export default {

  [CARGAR_PRODUCTOS]: function (state, products) {
    state.products = products
  }
}
