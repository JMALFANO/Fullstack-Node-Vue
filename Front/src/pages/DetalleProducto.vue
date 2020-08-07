
<template>

<q-page>

  <div class="q-pa-md">
      <q-table
        title="Detalle del Producto"
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

        </template>
    </q-table>
    </div>

</q-page>

</template>


<script>


export default {

name: 'DetalleProducto',

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
        { name: 'descripcion', label: 'Descripción', field:'descripcion'},
        { name: 'pico', label: 'Pico', field: 'pico'},
        { name: 'cubicaje', align: 'center', label: 'Cubicaje', field: 'cubicaje'},
        { name: 'cantxbolsa', label: 'Cantidad por bolsa', field: 'cantxbolsa'},
        { name: 'tono', label: 'Tono', field: 'tono'},
        { name: 'alto', label: 'Alto', field: 'alto'},
        { name: 'diametro', label: 'Diametro', field: 'diametro'},
        { name: 'img', label: 'Imagen', field: 'img'},
      ],
      data: [



      
     /*   {
          name: '500cc Laboratorio',
          id: '1',
          descripcion: 'Medio Laboratorio',
          pico: 1,
          cubicaje: '500cc',
          cantxbolsa: '150 unidades',
          tono: 'Cristal / Ambar',
          alto: '100mm',
          diametro: '50mm'  ,   
          img: 'statics/Hexagonal.jpeg',
        }
*/
        {

          name: ''+this.$store.state.productos.products[0].descripcion,
          id: ''+this.$store.state.productos.products[0].id,
          descripcion: ''+this.$store.state.productos.products[0].descripcion,
          pico:"Rosca",//pico: ''+this.$store.state.productos.products[0].pico,
          cubicaje: ''+this.$store.state.productos.products[0].cubicaje + "cc",
          cantxbolsa: ''+this.$store.state.productos.products[0].cantxbolsa + " unidades",
          tono: ''+this.$store.state.productos.products[0].tono,
          alto: ''+this.$store.state.productos.products[0].alto + "mm",
          diametro:''+ this.$store.state.productos.products[0].diametro  + "mm",   
          img: 'statics/' + this.$store.state.productos.products[0].id+ '.jpg',
        }
      ]

    }


    
}

 
}
  
</script>

