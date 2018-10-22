<template>
  <div id="app">
    <v-toolbar dark fixed>
      <v-toolbar-title>MTG Master</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="auth" flat :to="{ name: 'Cards' }">Cards</v-btn>
        <v-btn v-if="auth" flat :to="{ name: 'Information' }">Information</v-btn>
        <v-btn v-if="!auth" flat :to="{ name: 'Login' }">Login</v-btn>
        <v-btn v-if="!auth" flat :to="{ name: 'Register' }">Register</v-btn>
        <v-btn v-if="auth" flat @click="logOut">Log out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      auth: 'auth/check'
    })
  },
  methods: {
    async logOut() {
      await this.$store.dispatch('auth/logoutUser')
     
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .content {
    margin-top: 6rem;
  }
}
</style>
