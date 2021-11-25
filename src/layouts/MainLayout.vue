<template>
<div class="auth-layout">
    <div clas="page-title">
        <NavBar/>   
        <h2 class="page-title">
        {{$route.meta.title}}
    </h2>
    </div>
    <div clas="page-container">
        <router-view/>
    </div>
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
    name: 'MainLayout',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.auth-layout{
  justify-content: center;
  align-items: flex-start;
  display: flex;
  width: 100%;
  flex-direction: column;

}
</style>

