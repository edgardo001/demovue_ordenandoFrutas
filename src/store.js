import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    frutas:
    [
      { id: 1, nombre: 'Manzana', cantidad: 0, clase: 'list-group-item-danger' },
      { id: 2, nombre: 'Pera', cantidad: 0, clase: 'list-group-item-success' },
      { id: 3, nombre: 'Naranja', cantidad: 0, clase: 'list-group-item-warning' }
    ]
  },
  mutations: {
    aumentar (state, id) {
      console.log(id)
      state.frutas.find(item => item.id === id).cantidad++
    },
    reiniciar (state) {
      state.frutas.forEach(elemento => {
        elemento.cantidad = 0
      })
    }
  },
  actions: {

  }
})
