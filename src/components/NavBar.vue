<template>
  <div id="nav">
    <div class="nav-wrapper">
      <div class="links">
        
          <router-link class="linkPage"  exact to="/">Список дел</router-link>
          <router-link class="linkPage" to="/info">Инфо</router-link>
   
      </div>
      <a class="input nav-link">
        Выйти
      </a>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>

</style>
