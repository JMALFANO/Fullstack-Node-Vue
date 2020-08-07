<template>
  <div>

<table style="width:100%" v-for="item in items" v-bind:key="item.id">
  <tr>
    <th>Id</th>
    <th>Maquina</th>
    <th>Ultima actualizacion</th>
  </tr>

  <tr>
    <td> {{ item.id }} </td>
    <td> {{ item.maquina }} </td>
    <td> {{ item.fecha }} </td>
    <td> <button @click="irDetalleReporte(item.id)">Detalle</button> </td>
  </tr>

  </table>
</div>

</template>


<script>


export default {

  name: 'listaReportes',

  computed: {
    items: function () {
      return this.$store.state.reportes.reports
    }
  },
    methods:{
  irDetalleReporte(id) {
      this.$router.push({ name:'detalle-reporte', params: {id}})
    }
  }
}
</script>
