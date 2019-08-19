<template>
  <div>
    <h1>Hello</h1>
    <ul>
      <li v-for="(deck, index) in myDecks" :key="index">{{ deck.name }}</li>
    </ul>
    <v-btn fab dark large color="dark" bottom right fixed>
      <v-icon dark>note_add</v-icon>
    </v-btn>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('decks', ['myDecks'])
  },
  beforeMount() {
    this.$store.dispatch('decks/getMyDecks', { page: 1 })
  }
}
</script>