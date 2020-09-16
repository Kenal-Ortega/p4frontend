<template>
  <div class="header">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="logo">TO-DO's</span>
        </b-navbar-item>
      </template>
<!--      <template slot="start">-->
<!--        <b-navbar-item href="#">-->
<!--          <router-link to="/">Home</router-link>-->
<!--        </b-navbar-item>-->
<!--        <b-navbar-item href="#">-->
<!--          <router-link to="/Page2">About</router-link>-->
<!--        </b-navbar-item>-->
<!--        <b-navbar-dropdown label="Info">-->
<!--          <b-navbar-item href="#">-->
<!--            About-->
<!--          </b-navbar-item>-->
<!--          <b-navbar-item href="#">-->
<!--            Contact-->
<!--          </b-navbar-item>-->
<!--        </b-navbar-dropdown>-->
<!--      </template>-->

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <router-link :to="{ name: 'Login', query: { URL: this.URL }}" v-bind:URL="URL" v-if="!loggedIn">
              <button class="button is-success">Log in</button></router-link>
            <button v-if="loggedIn" class="button is-primary" @click="logout">Logout</button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['URL', 'loggedIn'],
  methods: {
    logout: function(){
      this.$emit('logout')
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');

.header {
    width: 90%;
    margin: 10px auto
}

span.logo{
  font-family: 'Libre Baskerville', serif;
  font-size: 2em;
}

</style>
