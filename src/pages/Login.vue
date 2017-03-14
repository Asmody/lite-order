<template>
  <div id="app">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Авторизация
        </p>
        <a class="card-header-icon">
          <span class="icon"><vf-icon icon="user" fixed></vf-icon></span>
        </a>
      </div>
      <div class="card-content">
        <form @submit.prevent="login">
          <p class="control">
            <input class="input" type="text" placeholder="Email">
          </p>
          <p class="control">
            <input class="input" type="password" placeholder="Пароль">
          </p>
        </form>
      </div>
      <div class="card-footer">
        <a class="card-footer-item is-primary" @click="login">Войти</a>
        <a class="card-footer-item">Регистрация</a>
      </div>
    </div>  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    login: () => {
      this.$store.dispatch('signIn', {email, pass})
    }
  }
}
</script>
