<template>
  <v-container>
    <v-layout row>
      <v-flex xs-4 xs-offset-4 justify-center>
        <img :src="`${baseUrl}mtgmaster404.png`">
        <h1>Side ikke funnet</h1>
        <p>Vi kunne ikke finnen siden du leter etter, noe som betyr at du sannsynligvis har skrevet feil adresse.</p>
      </v-flex> 
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
}
</script>