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
#nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0 0 1em rgb(112, 111, 111);
  /* vertical-align: middle; */
  border: aqua;
  background: linear-gradient(
    #74b3e7,
    #60ceea,
    #60ceea,
    #60ceea,
    #60ceea,
    #74b3e7
  );
  z-index: 1000;
}

.nav-wrapper{
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 10px, 20px;
  height: 100%;
  width: 100%;
  gap: 30px;
}

.linkPage {
  margin: 16px;
  /* list-style-type: none; */
}

#nav a {
  display: inline-block;
  width: 19.5%;
  text-align: center;
  color: black;
  font-size: 18pt;
  text-decoration: none;
}

#nav a:hover,
a:focus {
  color: purple;
  font-size: 20pt;
}

#nav a.router-link-exact-active {
  color: #09741b;
  font-weight: bold;
}
</style>
