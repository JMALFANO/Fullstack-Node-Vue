<template>

 <q-page class="flex-center">
  <div class="q-pa-md" style="max-width: 400px">

<h5>Actualizar datos de la cuenta </h5>

    <q-form      
      class="q-gutter-md"
    >
    Nombre de cuenta
      <q-input
        filled
        v-model="cuenta.nombre"
        label="Nombre de usuario"
      />
    Contraseña
      <q-input
        filled
        v-model="cuenta.contrasena"
        type="password"
        label="Contraseña"
      />
      ROL
       <q-input
        filled
        v-model="cuenta.rol"
        label="ROL"
      />
      <div>
        <q-btn @click="actualizar" label="Guardar cambios" type="submit" color="primary"/>
         <q-btn @click="volver" label="Volver"  color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>

  </div>
    </q-page>
</template>

<script>

export default {
name: 'Cuenta',


  mounted: function(){

    if (this.$store.getters['isLogged']== false)
    {
    this.$router.push('/')
    }
  },


data (){
    return {
      cuenta:{
      nombre: this.$store.state.usuarios.users.nombre,
      contrasena: this.$store.state.usuarios.users.contrasena,
      rol: this.$store.state.usuarios.users.rol
        }
    }
},
methods:{
    actualizar(){

 let payload = {'id': this.$store.state.usuarios.users.id,
                'nombre': this.cuenta.nombre,
                'contrasena': this.cuenta.contrasena,
                'rol': this.cuenta.rol}
              

      this.$store.dispatch('modificarUsuario', payload)


       
    },
 /*   onSubmit () {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Guardando modificaciones...'
        })
      },*/
}
  
}

</script>