<template>

  <div class="q-pa-md">
      <q-table
        title="Listado de Modelos"
        :data="data"
        :columns="columns"
        row-key="name"
        dark
      color="amber"
      >
        <template v-slot:body-cell-img="props"> 
          <!-- you can do anything you want here!!!    -->
          <q-td>
           
            <q-img   

      :src="props.value"
      spinner-color="white"   
      class="rounded-borders card-img-top"
      style="width: 150px; height: 100px;"
    >
    </q-img>   
           
          </q-td>

          <q-td>
             <q-btn color="primary" label="Mas Información"  @click="irDetalleProducto(1)" />
</q-td>

        </template>
    </q-table>
    </div>

</template>


<script>


export default {

  name: 'listaProductos',




data () {
    return {
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Modelo',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
       { name: 'id', label: 'id', field: 'id'},
        { name: 'descripcion', label: 'Descripción', field: 'descripcion' },
        { name: 'cubicaje', align: 'center', label: 'Cubicaje', field: 'cubicaje',  sortable: true },
        { name: 'pico', label: 'Pico', field: 'pico',  sortable: true},
        { name: 'img', label: 'Imagen', field: 'img'},
        { name: 'detalle', label: 'Detalle', field: 'detalle' },
      ],
      data: [
        {
          id: '1',
          descripcion: 'Medio Laboratorio',
          name: '500cc Laboratorio',
          cubicaje: '500cc',
          pico: "Rosca",     
          img: 'statics/1.jpg',
      //    detalle: irDetalleProducto(1)
        },
          {
          id: '2',
         descripcion: 'Litro Laboratorio',
          name: '1000cc Laboratorio',
          cubicaje: '1000cc',
          pico: "Rosca",
          img: 'statics/Corazoncito.jpeg',
      //    detalle: irDetalleProducto(2)
        }
      ]
    }
},





  methods:{
  irDetalleProducto(id) {
      this.$router.push({ name:'detalle-producto', params: {id}})
    }
  },
  computed: {
    items: function () {
      return this.$store.state.productos.products
    }
  }
}
</script>
