<template>
  <div id="app">
    <error-msg></error-msg>
    <div class="login columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              Авторизация
            </p>
          </div>
          <div class="card-content">
            <form @submit.prevent="login">
              <p class="control">
                <input class="input" type="text" placeholder="Email" v-model="email">
              </p>
              <p class="control">
                <input class="input" type="password" placeholder="Пароль" v-model="pass">
              </p>
            </form>
          </div>
          <div class="card-footer">
            <a class="card-footer-item is-primary" @click="login">Войти</a>
            <a class="card-footer-item">Регистрация</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ErrorMsg from '@/components/ErrorMsg'


export default {
  name: 'login',
  data () {
    return {
      email: this.$store.state.user.email,
      pass: this.$store.state.user.pass
    }
  },
  components: {
    ErrorMsg
  },
  methods: {
    login () {
      this.$auth.login({
        email: this.email,
        pass: this.pass,
        redirect: this.$route.query.redirect
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  margin-top: 10%;
}
</style>
