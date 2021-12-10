<template>
  <div id="nav">
    <div class="nav-wrapper">
      <div class="links">
        
          <router-link class="linkPage"  exact to="/">Список дел</router-link>
          <router-link class="linkPage" to="/info">Инфо</router-link>
   
      </div>
      <a @click= 'onLogoutClicked' class="input nav-link">
        Выйти
      </a>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import {doLogout} from '@/netClient/todoService'

export default {
  name: "Navbar",
  methods:{
    async onLogoutClicked(){
      try{
        await doLogout();
  this.$router.push('/login')
      } catch (error){
        console.error({error})
      }
    }
  }
};
</script>

<style scoped>

</style>
