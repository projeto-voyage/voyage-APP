<template>
  <footer>
    <div class="copyright">
      <p>© 2023 Voyage. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  padding: 2em;
  /* background-color: #1A2A3A; */
  color: white;
  text-align: center;
}

.copyright {
  background-color: red;
}

a {
  color: red;
  margin: 0 10px;
  text-decoration: none;
}

p {
  margin: 5px 0;
  color: red;
}
</style>
