<template>
  <el-card>
    user_name:<input type="text" v-model="loginForm.username"/>
    <br><br>
    password:<input type="password" v-model="loginForm.password"/>
    <br><br>
    <button @click="findUser">登录</button>
  </el-card>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    findUser: function () {
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
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
