<template>
    <div class="main-container">
      <viewItinerary />
    </div>
  </template>
  
  <script>
  import viewItinerary from '../components/viewItineraryPage.vue'
  
  export default {
    name: 'viewItineraryView',
    components: {
      viewItinerary,
    },
  }
  </script>
  
  <style scoped></style>