import { CARGAR_REPORTES } from './types'

export default {
  cargarReportes ({ commit }) {
    //https://app-tesisalfano.herokuapp.com/reporte
    fetch('https://thingspeak.com/channels/1090602/field/1.json')  
    
   
    .then((result) => {
        return result.json()
      })
      .then((reports) => {
        commit(CARGAR_REPORTES, reports)
      })
      .catch(er => {
        console.log(er)
      })
  }





}
