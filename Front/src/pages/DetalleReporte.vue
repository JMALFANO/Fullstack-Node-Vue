<template>

<div>

<q-page class="flex flex-center">

ITEM {{$route.params.id}}

<table style="width:100%" v-for="item in items" v-bind:key="item.id">
  <tr>
    <th>Id</th>
    <th>Maquina</th>
    <th>(Count) Traba colocador</th>
    <th>(Count) Control remoto</th>
    <th>(Count) Soplado en vacio</th>
    <th>(Count) Humo y fuego</th>
    <th>Fecha</th>

  </tr>

  <tr>
    <td> {{ item.id }} </td>
    <td> {{ item.maquina }} </td>
    <td> {{ item.counttrabacolocador }} </td>
    <td> {{ item.countcontrolremoto }} </td>
    <td> {{ item.countsopladovacio }} </td>
    <td> {{ item.counthumofuego }} </td>
    <td> {{ item.fecha }} </td>
  </tr>

  </table>

</q-page>

</div>

</template>

<script>


export default {
name: 'DetalleReporte',

    computed: {
    items: function () {

var ide = this.$route.params.id

var reporte = this.$store.state.reportes.reports

const filtroid = ({ id }) => id == ide

var resultadoid = reporte.filter(filtroid)

      return resultadoid
    }
  }
}
</script>