<template>
    <div>
        <ul class="list-group">
            <!--Si pinta en rojo la linea, se debe agregar el elemento ":key"-->
            <li v-for="(item) of arrayOrdenado" :key="item.id" 
            class="list-group-item d-flex justify-content-between align-items-center" :class="item.clase" @click="aumentar(item.id)">
                {{item.id}} - {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
            <button class="btn btn-danger btn-bloc" @click="reiniciar">Reiniciar</button>
        </ul>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Lista',
  computed: {
    // Los "state" del "store.js" siempre se pasan entre "[]"
    ...mapState(['frutas']),
    arrayOrdenado () {
      // Se debe usar slice antes del sort, no se puede mutar el objeto original
      // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-side-effects-in-computed-properties.md
      console.log(this.frutas)
      return this.frutas.slice().sort((a, b) => b.cantidad - a.cantidad)
    }
  },
  methods: {
    // Las "mutations" del "store.js" siempre se pasan entre "[]"
    ...mapMutations(['aumentar', 'reiniciar'])
  }
}
</script>
