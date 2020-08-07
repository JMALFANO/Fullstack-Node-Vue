<template>
    <div>
      <q-page class="flex flex-center">
     REPORTES


     <listaReportes> </listaReportes>
</q-page>
    </div>
</template>

<script>

import listaReportes from 'components/listaReportes'

export default {
name: 'Reporte',

components:{
listaReportes
},
   created () {
    this.$store.dispatch('cargarReportes')
  }
}

</script>