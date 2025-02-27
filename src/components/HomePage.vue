<template>
  <Header />
  <Hero />
</template>

<script>
  import Header from './Header.vue';
  import Hero from './Hero.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Hero
    },
}
</script>

<style scoped></style>
