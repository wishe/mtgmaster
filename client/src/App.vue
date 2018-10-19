<template>
  <div id="app">
    <v-toolbar dark fixed>
      <v-toolbar-title>MTG Master</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{ name: 'Cards' }">Cards</v-btn>
        <v-btn flat :to="{ name: 'Information' }">Information</v-btn>
        <v-btn flat :to="{ name: 'Login' }">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
