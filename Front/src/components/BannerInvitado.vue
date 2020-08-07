<template>

  <div v-if="cartel" class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-blue-grey-9 text-white">

  Se encuentra navegando en modo invitado.

      <template v-slot:action>
        <q-btn flat color="yellow"  label="Continuar como invitado" @click="seguirInvitado"/>
        <q-btn flat color="yellow" label="Iniciar sesión"  @click="iniciarSesion"/>
      </template>
    </q-banner>
  </div>

</template>

<script>

export default {

  name: 'BannerInvitado',

   props: {
logueado: Boolean
   },
  data() {
    return {  
    cartel: true
    }
  },
  methods:{
  iniciarSesion() {
  this.$router.push({ path:'login'})
    this.cartel = false
    },

  seguirInvitado(){
    this.cartel = false
  }

  }
}
</script>
