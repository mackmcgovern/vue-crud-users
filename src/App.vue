<template>
  <the-header></the-header>
  <router-view></router-view>
  <!-- <user-list></user-list> -->
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
  components: {
    TheHeader,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap');

:root {
  --primary-color: #003d52;
  --secondary-color: #388ba7;
  --accent-color: #520015;
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'Rubik', sans-serif;
  color: #333;
}

body {
  margin: 0;
}
</style>
