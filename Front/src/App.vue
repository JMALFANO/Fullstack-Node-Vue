<template>
  <div id="q-app">
     <!-- <img src="./assets/logoal-ma.jpeg"> !-->

     <br/>
      <br/>
 <!--   <button v-on:click="irHome">Home</button>
    <button v-on:click="irCatalogo">Catalogo</button>
    <button v-on:click="irContacto">Contacto</button>
    <button v-on:click="irReporte">Reporte</button>
    <button v-on:click="irAbout">About</button> !-->
    <br/>
    <br/>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
   /* methods: {
    irHome: function () {
      this.$router.push('/')
    },
     irCatalogo: function () {
      this.$router.push('catalogo')
    },
    irContacto: function () {
      this.$router.push('contacto')
    },
      irReporte: function () {
      this.$router.push('reporte')
    },
      irAbout: function () {
      this.$router.push('about')
    }
  }*/
}
</script>
