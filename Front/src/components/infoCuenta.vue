<template>
  <div class="q-pa-md">
    <q-btn-dropdown
      class="glossy"
      color="warning"
    >
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md"><center>Configuraciones</center></div>

          <q-btn
           v-on:click="irCuenta"
            color="primary"
            label="Modificar datos de cuenta"
            push
            size="sm"
            v-close-popup
          />     
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
            <div class="text-subtitle1 q-mt-md q-mb-xs">{{cuenta.nombreUsuario}} </div>
              
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

            <div class="text-subtitle2 q-mt-xs q-mb-xs">({{cuenta.rolUsuario}})</div>
          
         
          
          <q-btn
            color="primary"
            v-on:click="cerrarSesion"
            label="CERRAR SESION"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: 'infoCuenta',

    data() {

          let nombreRol = ['Administrador', 'Recepcionista', 'Cliente']

          let DescripcionRol = "" + nombreRol[this.$store.state.usuarios.users.rol - 1]
      return {
          cuenta:{
          nombreUsuario: this.$store.state.usuarios.users.nombre,
          rolUsuario: DescripcionRol//this.$store.state.usuarios.users.rol
          }
      }
  },
      methods:{
      irCuenta(){
      this.$router.push('/cuenta')
      },
      cerrarSesion(){
          let payload = { 'id': '',
                          'nombre': '',// this.$store.state.usuarios.users.nombre,
                          'contrasena': '',
                          'rol': ''} //this.$store.state.usuarios.users.contraseña}


      this.$store.dispatch('logoutUsuario', payload)
      //this.$router.push('/')
      }

      
      },
  }

</script>