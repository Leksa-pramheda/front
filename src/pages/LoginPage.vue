<template>
  <div class="login">
      <h1>Вход</h1>
    <form @submit.prevent="doLogin" class="login-form auth-form">
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
input {
  background: white;
  width: 80%;
  box-sizing: border-box;
  height: 50px;
  font-size: 20px;
  font-weight: 0.5px;
  padding-left: 25px;
  border: 3px solid gray;
  margin-bottom: 20px;
  color: gray;
}

.login{
  background: radial-gradient(#60ceea, #6078ea, #60ceea);
  margin: 25px;
  padding: 20px;
  outline: 2px solid rgb(73, 240, 129);
  box-shadow: 0 0 1em black;
  border-radius: 1em;
  min-width: 300px;
  max-width: 500px;
  width:100%;
  display:inline-block;
}

button {
  padding-left: 25px;
  padding-right: 25px;
  margin-left: 0.1em;
  text-align: center;
  margin-bottom: 15px;
}

</style>