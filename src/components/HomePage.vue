<template>
  <Header />
  <Hero />
  <Features />
  <Testimonials />
  <Footer />
</template>

<script>
  import Header from './Header.vue';
  import Hero from './Hero.vue';
  import Features from './Features.vue';
  import Testimonials from './Testimonials.vue';
  import Footer from './Footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Hero,
      Features,
      Testimonials,
      Footer,
    },
}
</script>

<style scoped></style>
