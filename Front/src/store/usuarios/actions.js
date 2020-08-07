import { LOGIN_USUARIO } from './types'
import { LOGOUT_USUARIO } from './types'
import { CREAR_USUARIO} from './types'
import { MODIFICAR_USUARIO} from './types'


export default {

  logoutUsuario({commit}, payload){
  commit(LOGOUT_USUARIO, payload)
  this.$router.push('/')
  },

 loginUsuario ({commit}, payload) {

  console.log(payload)

  const url = 'https://app-tesisalfano.herokuapp.com/usuario/login'
  
  const user = {
      nombre: payload.nombre,
      contrasena: payload.contrasena
  }
  
  const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'Content-Type': 'application/json'
      }
  }

   fetch(url,options)
      .then((result) => {
        return result.json()
      })
      .then((payload) => {
        commit(LOGIN_USUARIO, payload)
        
    this.$router.push('/')

      })
      .catch(er => {
        console.log(er)
      })
  },

  crearUsuario ({commit}, payload) {

    console.log(payload)

    const url = 'https://app-tesisalfano.herokuapp.com/usuario/register'
    
    const user = {
        nombre: payload.nombre,
        contrasena: payload.contrasena
    }
    
    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }
  
     fetch(url,options)
        .then((result) => {
          return result//.json()
        })
        .then((payload) => {
        commit(CREAR_USUARIO, payload)
  
      this.$router.push('/')
  
        })
        .catch(er => {
          console.log(er)
        })
    },
  
  modificarUsuario ({commit}, payload) {

    console.log(payload)

    const url = 'https://app-tesisalfano.herokuapp.com/usuario/update/' + payload.id
    

    console.log(url)

    const user = {
        id: payload.id,
        nombre: payload.nombre,
        contrasena: payload.contrasena,
        rol: payload.rol
    }
    
    const options = {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }
  
     fetch(url,options)
        .then((result) => {
          return result//.json()
        })
        .then((payload) => {
          commit(MODIFICAR_USUARIO, payload)
  
      this.$router.push('/')

        })
        .catch(er => {
          console.log(er)
        })
    }















}



   /*   this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Bienvenido',
      })
  */
/*this.$q.notify({
  color: 'red-4',
  textColor: 'white',
  icon: 'cloud_done',
  message: 'Verifique nuevamente sus datos...'
})
*/