<template>
  <div>
    id:<input type="text" v-model="findForm.id"/>
    <br><br>
    user_name:<input type="text" v-model="findForm.user_name"/>
    <br><br>
    password:<input type="password" v-model="findForm.password"/>
    <br><br>
    name:<input type="text" v-model="findForm.name"/>
    <br><br>
    age:<input type="text" v-model="findForm.age"/>
    <br><br>
    email:<input type="text" v-model="findForm.email"/>
    <br><br>
    <button @click="findUser">查询</button>
  </div>
</template>

<script>
export default {
  name: 'FindUser',
  data () {
    return {
      findForm: {
        id: '',
        user_name: '',
        password: '',
        name: '',
        age: '',
        email: ''
      },
      responseResult: []
    }
  },
  methods: {
    findUser: function () {
      this.$axios
        .get('/find', {
          id: this.findForm.id,
          user_name: this.findForm.user_name,
          password: this.findForm.password,
          name: this.findForm.name,
          age: this.findForm.age,
          email: this.findForm.email
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/index'})
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style scoped>

</style>
