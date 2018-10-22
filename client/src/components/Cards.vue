<template>
  <v-layout row wrap>
    <v-flex
      v-for="(card, index) in cards"
      :key="index"
      xs6 sm3 lg2
      class="card-holder">
        <img :src="card.image_uris.large" alt="">
      
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Cards',
  data() {
    return {
      cards: [],
      menu: false
    }
  },
  computed: {
    filteredCards() {
      return this.cards.slice(3, -1)
    }
  },
  methods: {
    getCards() {
      axios.get('https://api.scryfall.com/cards/search?q=c%3Awhite+cmc%3D1').then((res) => {
        this.cards = res.data.data
      }).catch(() => {
      })
    },
  },
  beforeMount() {
    this.getCards()
  },
}
</script>
<style lang="scss" scoped>
  img {
    width: 100%
  }
  .card-holder {
    padding: .5rem;
  }
</style>
