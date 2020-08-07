<template>
<div>
  <q-layout view="hHh lpr fff">

    <q-header bordered class="bg-primary text-white" height-hint="98">
      
      <q-toolbar>

        <q-toolbar-title align="center" no-wrap>
      
          <q-avatar>
            <img src="~assets/LOgo.png">
          </q-avatar>
         ALMA-PLAST S.R.L 
        </q-toolbar-title>
        <InfoCuenta align="right" v-if="logueado"> </InfoCuenta>
      </q-toolbar>

      <q-tabs>
        <q-route-tab align="center" to="/" label="Home" />
        <q-route-tab align="center" to="/catalogo" label="Catalogo" />
        <q-route-tab align="center" to="/contacto" label="Contacto" />   
        <q-route-tab align="center" to="/r" label="Reporte" /> 
 </q-tabs>
      
      <BannerInvitado v-if="!logueado"> </BannerInvitado>

    </q-header>

    <q-page-container>

<div class="row">
  <div class="col-1 bg-blue-grey-9 text-white"></div>

  <div class="col-10 bg-grey-13 flex flex-center">

<router-view />
        
  </div>

  <div class="col-1 bg-blue-grey-9 text-white"></div>

</div>


    </q-page-container>


 <q-footer reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/LOgo.png">
          </q-avatar>
           2020 AL-MA PLAST S.R.L Todos los derechos reservados. 
        </q-toolbar-title>
       

      </q-toolbar>
    </q-footer>

  </q-layout>

</div>
  
</template>

<script>
import InfoCuenta from 'components/infoCuenta'
import EssentialLink from 'components/EssentialLink'
import BannerInvitado from 'components/Bannerinvitado'

export default {
  name: 'MainLayout',

updated() {

if (this.$store.getters['isLogged'])
{
this.logueado = true
}
else
{
this.logueado = false
}
}, 

  components: {
    EssentialLink,
    BannerInvitado,
    InfoCuenta
  },

  data () {

    return {
      logueado: false,
      }
    /*
    leftDrawerOpen: false,
      
      essentialLinks: [
        {
          title: 'Home',
          caption: 'Pagina principal',
          icon: 'favorite',
          link: '/'
        },
         {
          title: 'Reporte',
          caption: 'Reportes en linea',
          icon: 'code',
          link: '/r'
        },
        {
          title: 'Catalogo',
          caption: 'Grilla de productos',
          icon: 'chat',
          link: '/catalogo'
        },
        {
          title: 'Contacto',
          caption: 'Mas acerca de nosotros',
          icon: 'public',
          link: '/contacto'
        }
      ]*/
    
   
  }
 
}
</script>
