<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterView
  },
}
</script>

<style>
/* Estilos globais */
body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* #app {
  display: flex;
  justify-items: end;
  align-items: center;
} */

</style>
