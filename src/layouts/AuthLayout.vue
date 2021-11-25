<template>
<div class="auth-layout">
    <h2 class="page-title">
        {{$route.meta.title}}
    </h2>
    <div clas="page-container">
        <router-view/>
    </div>
</div>
</template>

<script>

export default {
    name: 'AuthLayout',
};
</script>

<style scoped>
.auth-layout{
  justify-content: center;
  align-items: flex-start;
  display: flex;
  width: 100%;
  max-width: 500px;
  flex-direction: column;

}
</style>

