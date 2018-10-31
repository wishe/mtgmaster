<template>
  <v-app id="app">
    <v-toolbar app flat>
      <v-toolbar-title><router-link :to="{ name: 'Home' }"><img class="application-logo" src="./assets/mtglogo.png"></router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="auth" flat :to="{ name: 'Cards' }">Kort</v-btn>
        <v-btn v-if="auth" flat :to="{ name: 'Decks' }">Decks</v-btn>
        <v-btn v-if="auth" flat :to="{ name: 'Draftbuilder' }">Draftbygger</v-btn>
        <v-btn v-if="auth" flat :to="{ name: 'Information' }">Informasjon</v-btn>
        <v-btn v-if="!auth" flat :to="{ name: 'Login' }">Logg inn</v-btn>
        <v-btn v-if="!auth" flat :to="{ name: 'Register' }">Registrer</v-btn>
        <v-btn v-if="auth" flat @click="logOut">Logg ut</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content fluid class="content">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer class="pa-3" fixed app>
      <v-spacer></v-spacer>
      <div>&copy; Wishe {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .application-logo {
    width: 120px;
  }
}
</style>
<style lang="scss" scoped>
 
</style>
