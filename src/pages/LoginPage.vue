<template>
  <div class="login">
      <h1>Вход</h1>
    <form @submit.prevent="onFormSubmit" class="login-form auth-form">
      <div class="form-field">
        <label for="login"></label>
        <input class="input-info"
          v-model="login"
          id="login"
          type="text"
          placeholder="Ваш ник"
          required
        />
      </div>
      <div class="form-field">
        <label for="password"></label>
        <input class="input-info"
          v-model="password"
          type="password"
          id="password"
          placeholder="Ваш пароль"
          required
          encrypted
        />
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
import { doLogin } from "@/netClient/authService";

export default {
  name: 'LoginPage'  ,
    data: () => ({
    login: "",
    password: "",
  }),
  async mounted(){

  },
  methods:{
    async onFormSubmit() {
      try {
        const token = await doLogin(
            this.login.trim(),
            this.password.trim()
        );
        console.warn({token});
        if (token) {
          this.$router.push('/')
        }
      } catch (error) {
        console.error({ error });
        throw error;
      }
      // this.$router.push("/login");
    },
      redirect(){
          this.$router.push('/registration')
      }
  }
};
</script>

<style scoped>

</style>