<template>
  <v-layout row>
      <v-navigation-drawer 
        app 
        clipped 
        dark
        floating
        width="500">
        <h2>Filtrer kort</h2>
      </v-navigation-drawer>
      <v-flex xs12> 
        <v-form @submit.prevent="searchCards">
          <v-layout>
            <v-flex xs9 md11>
              <v-text-field
                v-model="searchString"
                label="Søk"
                placeholder="Søk etter kort"
              ></v-text-field>
            </v-flex>
            <v-flex xs3 md1>
              <v-btn type="submit" color="success">Søk</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      <v-layout row wrap>
        <v-flex xs12>
          <v-progress-linear v-if="searching" :indeterminate="true"></v-progress-linear>
          <v-alert
            v-if="cards.length < 1"
            value="true"
            color="error">
            Vi fant ingen kort på kriteriene du har oppgitt
          </v-alert>
        </v-flex>
        <v-flex
          v-for="(card, index) in cards"
          :key="index"
          xs6 sm3 lg2
          class="card-holder">
            <img v-if="card.image_uris" :src="card.image_uris.large" alt="">
            <img v-else src="http://placehold.jp/250x350.png" alt="">
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs12>
          <v-pagination
            :length="15"
            dark>
          </v-pagination>
        </v-flex>
      </v-layout>
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
      searchString: '',
      searching: false
    }
  },
  computed: {
  },
  methods: {
    getCards() {
      this.cards = []
      axios.get('https://api.scryfall.com/cards/search?q=c%3Ablack+cmc%3D1').then((res) => {
        this.cards = res.data.data
        this.searching = false
      }).catch(() => {
        
      })
    },
    searchCards() {
      this.cards = []
      this.searching = true;
      axios.get(`https://api.scryfall.com/cards/search?order=cmc&q=${encodeURIComponent(this.searchString).replace(/'/g, '%27')}`).then((res) => {
        this.cards = res.data.data
        this.searching = false
      }).catch(() => {
        this.searching = false
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
  .v-navigation-drawer {
    padding: 1rem;
    color: white;
  }
  .v-card {
    background-color: #f5f5f5;

  }
</style>
