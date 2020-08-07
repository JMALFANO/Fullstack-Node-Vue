import {LOGIN_USUARIO} from './types'
import {LOGOUT_USUARIO} from './types'
import {CREAR_USUARIO} from './types'
import {MODIFICAR_USUARIO} from './types'
export default {
/*
  login: function(state, data){
    state.nombre = data.nombre
    state.contrasena = data.contrasena
  },

  logout: function(state){
    state.nombre = null
    state.contrasena = null
  },
*/
  [LOGIN_USUARIO]: function (state, users) {
    state.users = users
  },
  [LOGOUT_USUARIO]: function (state, users) {
    state.users = users
  },

  [CREAR_USUARIO]: function (state, users) {
    state.users = users
  },
  [MODIFICAR_USUARIO]: function (state, users) {
    state.users = users
  }
}


