
const routes = [
 {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
   //   { path: '', component: () => import('pages/Index.vue') },
      {name: 'Home', path: '', component: () => import('pages/Home.vue') },  
      {name: 'Catalogo', path: '/catalogo', component: () => import('pages/Catalogo.vue') },
      {name: 'Contacto',  path: '/contacto', component: () => import('pages/Contacto.vue') },
      //{name: 'Reporte',  path: '/reporte', component: () => import('pages/Reporte.vue') },
      {name: 'Reporte',  path: '/r', component: () => import('pages/R.vue') },
      {name: 'About',  path: '/about', component: () => import('pages/About.vue') },
      {name: 'Registro',  path: '/register', component: () => import('pages/Register.vue') },
      {name: 'Iniciar sesión',  path: '/login', component: () => import('pages/Login.vue') },
      {name: 'Mi cuenta',  path: '/cuenta', component: () => import('pages/Cuenta.vue') },
      {
        path: '/producto/detalleproducto/:id',
        name: 'detalle-producto',
        component: () =>  import('pages/DetalleProducto')
      },
      {
        path: '/reporte/detallereporte/:id',
        name: 'detalle-reporte',
        component: () =>  import('pages/DetalleReporte')
      }
    ]
  }
]
   

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes











