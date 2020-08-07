<template>

<q-page>

<h5>Iniciar sesión</h5>
      <q-form
    v-on:submit="iniciar"
>
<q-input
filled
v-model="nombre"
label="usuario"
hint="Ingrese su nombre de usuario"
lazy-rules
:rules="[val => val && val.length > 0 || 'Por favor ingrese su nombre de usuario']"
/>

<q-input

filled
type="password"
v-model="contrasena"
autocomplete="on"
label="Contraseña"
hint="Ingrese su contraseña"
lazy-rules
:rules="[val => val && val.length > 0 || 'Por favor ingrese su contraseña']"
/>

<q-btn  label="INGRESAR" type="submit" color="primary"/>
<q-btn @click="registrar" label="CREAR UNA CUENTA"  color="primary" flat class="q-ml-sm"/>

</q-form>
</q-page> 

</template>

<script>

export default {
name: 'Login',

data (){
    return {
      id: '',
      nombre: '',
      contrasena: '',
      rol: ''  
    }
},

methods:{

    registrar(){
    this.$router.push('register')
    },

    iniciar(){

       let payload = {'nombre': this.nombre,
                      'contrasena': this.contrasena}
    console.log(payload)
    this.$store.dispatch('loginUsuario', payload)

           }
        }
}

</script>