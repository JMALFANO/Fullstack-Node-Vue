<template>
      <q-page>
     <listaProductos> </listaProductos>
 </q-page>
</template>

<script>

import listaProductos from 'components/listaProductos'

export default {
name: 'Catalogo',

components:{
listaProductos
},
   created () {
    this.$store.dispatch('cargarProductos')
  }
}

</script>