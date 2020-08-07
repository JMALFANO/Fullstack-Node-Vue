export default {
    isLogged: function(state){
       // console.log(state.users.nombre != null && state.users.nombre.length > 0 && state.users.contrasena != null && state.users.contrasena.length > 0)
        return state.users.nombre != null && state.users.nombre.length > 0 && state.users.contrasena != null && state.users.contrasena.length > 0
   
    }
}