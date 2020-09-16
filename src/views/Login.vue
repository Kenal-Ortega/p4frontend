<template>
  <div class="login">
    <b-field label="Username"
            type="is-success"
            message="Please enter username">
            <b-input v-model="username"></b-input>
        </b-field>

        <b-field label="Password"
            type="is-warning"
            :message="['Please enter password']">
            <b-input type="password" v-model="password" password-reveal></b-input>
        </b-field>
    <button class="button is-primary" @click="handleLogin">Log In</button>

  </div>

</template>

<script>
export default {
name: "Login",
  data: function(){
  return{
    username: '',
    password: ''
    };
  },
  methods: {
    handleLogin: function(){
      fetch(this.$route.query.URL + "/auth/users/login/", {
        method: 'post',
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username:this.username,
          password:this.password
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.$emit('loggedIn', data)
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 70%;
  margin: 10px auto;
}
</style>