<template>
  <div class="login">
      <h1>Вход</h1>
    <form @submit.prevent="onFormSubmit" class="login-form auth-form">
              <div class="form-field">
        <label for="login"></label>
        <input id="login" type="text" placeholder="Ваш ник" required />
      </div>
      <div class="form-field">
        <label for="password"></label>
        <input type="password" id="password" placeholder="Ваш пароль" required encrypted />
      </div>
      <button id="submitBtn" type="submit">Войти</button>
    <div class="action-link">
        <span>Нет аккаунта?</span>
         <a @click="redirect" class="link-btn">Зарегистрироваться</a>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'LoginPage'  ,
  async mounted(){

  },
  methods:{
      doLogin(){
          this.$router.push('/')
      },
      redirect(){
          this.$router.push('/registration')
      }
  }
};
</script>

<style scoped>

</style>