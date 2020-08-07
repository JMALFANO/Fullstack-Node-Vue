import {CARGAR_REPORTES} from './types'

export default {

  [CARGAR_REPORTES]: function (state, reports) {
    state.reports = reports
  }
}
