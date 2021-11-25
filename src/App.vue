<template>
  <div id="app">
    <component :is="layout">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';

export default {
    name: 'App',
  components: {
    MainLayout, AuthLayout
  },
  computed:{
    layout(){
      return this.$route.meta?.layout ;
    }
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  color: #2c3e50;
  margin-top: 60px;

  /* padding-top: 10%; */
}
html {
background: radial-gradient(  #a8e774, #6078ea);
}


</style>
