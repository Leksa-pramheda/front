<template>
<header>
<nav>
  <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/info">Info</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</nav>
</header>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>

#nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  margin-bottom: 15px;
  box-shadow: 0 0 1em rgb(112, 111, 111);
  vertical-align: middle;
  border: aqua;
  background: linear-gradient(#74b3e7,#60ceea, #60ceea,#6078ea, #60ceea,#60ceea,#74b3e7);
  z-index:1000;
}

#nav li{
    margin: 16px; 
    list-style-type: none;
}

#nav a {
  display: inline-block;
  width: 19.5%;
  text-align: center;
  color:black;
  font-size: 18pt;
  text-decoration: none;
}

#nav a:hover, a:focus {
    color:purple;
  font-size: 20pt;
}

#nav a.router-link-exact-active{
    color: #200bdf;
    font-weight: bold;
}



</style>
