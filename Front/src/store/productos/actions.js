import { CARGAR_PRODUCTOS } from './types'

export default {
  cargarProductos ({ commit }) {

   fetch('https://app-tesisalfano.herokuapp.com/producto')
      .then((result) => {
        return result.json()
      })
      .then((products) => {
        commit(CARGAR_PRODUCTOS, products)
      })
      .catch(er => {
        console.log(er)
      })
  }
}
