
<template>

<q-page class= "flex-center">

<h5>Crear cuenta</h5>


<q-form
    v-on:submit="crear"
>
<q-input
filled
v-model="cuenta.nombre"
label="usuario"
hint="Ingrese un nombre de usuario"
lazy-rules
:rules="[val => val && val.length > 0 || 'Por favor ingrese un nombre de usuario']"
/>

<q-input
filled
type="password"
autocomplete="on"
v-model="cuenta.contrasena"
label="Contraseña"
hint="Ingrese una contraseña"
lazy-rules
:rules="[val => val && val.length > 0 || 'Por favor ingrese una contraseña']"
/>
<div>
<q-btn label="CREAR CUENTA" type="submit" color="primary"/>
<q-btn @click="volver" label="VOLVER" type="submit" color="primary" flat class="q-ml-sm"/>

</div>


</q-form>
</q-page> 
</template>

<script>
export default {
name: 'Register',

  data () {
    return {
      cuenta:{
      id: '',
      nombre: '',
      contrasena: '',
      rol: ''  
        }
    }
  },

  methods: {

    crear(){

       let payload = {'nombre': this.cuenta.nombre,
                      'contrasena': this.cuenta.contrasena}
                      
      this.$store.dispatch('crearUsuario', payload)

    },

      onReset () {
      this.cuenta.nombre = null
      this.cuenta.contrasena = null
    },
    volver(){
       this.$router.push('/')
    }
    }


}
</script>