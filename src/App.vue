<template>
  <div id="app">
    <!-- <RouterView /> -->
    <Header />
    <Hero />
    <Features />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import Testimonials from './components/Testimonials.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    // RouterView,
    Header,
    Hero,
    Features,
    Testimonials,
    Footer,
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
