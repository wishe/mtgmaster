<template>
  <v-app id="app">
    <v-toolbar app flat>
      <v-toolbar-title><router-link :to="{ name: 'Home' }"><img class="application-logo" src="./assets/mtglogo.png"></router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="auth" flat :to="{ name: 'Cards' }"><Keyrune set="bcore" size="2x" />Kort</v-btn>
        <v-btn v-if="auth" flat :to="{ name: 'Decks' }"><Keyrune set="duels" size="2x" />Decks</v-btn>
        <v-btn v-if="auth" flat :to="{ name: 'Draftbuilder' }"><Keyrune set="wth"  size="2x" />Draftbygger</v-btn>
        <v-btn v-if="auth" flat :to="{ name: 'Playgroup' }"><Keyrune set="pfnm" size="2x" />Spillgruppe</v-btn>
        <v-btn v-if="auth" flat :to="{ name: 'Settings' }"><Keyrune set="v0x" size="2x" />Innstillinger</v-btn>
        <v-btn v-if="!auth" flat :to="{ name: 'Login' }"><Keyrune set="pmei" size="2x" />Logg inn</v-btn>
        <v-btn v-if="!auth" flat :to="{ name: 'Register' }"><Keyrune set="past" size="2x" />Registrer</v-btn>
        <v-btn v-if="auth" flat @click="logOut"><Keyrune set="10e" size="2x" />Logg ut</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content fluid class="content">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer class="pa-3" fixed app>
      <div>Utviklet av <a target="_blank" href="https://github.com/wishe">Wishe</a></div>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import { Keyrune } from "@saeris/vue-keyrune"
import "keyrune"

export default {  
  name: 'App',
  components: {
    Keyrune
  },
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
  .v-btn__content {
    i {
      margin-bottom: .4rem;
      margin-right: .7rem;
    }
  }
</style>
