<template>
    <div class="main-container">
      <Itinerary />
    </div>
  </template>
  
  <script>
  import Itinerary from '../components/ItineraryPage.vue'
  
  export default {
    name: 'ItineraryView',
    components: {
      Itinerary,
    },
  }
  </script>
  
  <style scoped></style>