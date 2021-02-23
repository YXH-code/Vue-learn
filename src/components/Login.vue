<template>
  <div>
    user_name:<input type="text" v-model="loginForm.user_name"/>
    <br><br>
    password:<input type="password" v-model="loginForm.password"/>
    <br><br>
    <button @click="findUser">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        user_name: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    findUser: function () {
      this.$axios
        .get('/login', {
          user_name: this.loginForm.user_name,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/index'})
          }
        })
        .catch(failResponse => {
          alert('登录失败')
        })
    }
  }
}
</script>

<style scoped>

</style>
