<template>
  <v-layout row>
    <v-navigation-drawer
      app 
      dark
      floating
      width="500">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Kort
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <div class="card-filters">
        <v-subheader>Farge</v-subheader>
        <div class="color-filter">
          <Mana v-for="(item, index) in colors" :symbol="item" size="4x" cost :key="index"></Mana>
        </div>
        <v-subheader>Mana</v-subheader>
        <div class="mana-filter">
          <Mana v-for="(item, index) in mana" :symbol="item" size="3x" cost :key="index"></Mana>
        </div>
        <v-subheader>Type</v-subheader>
        <div class="type-filter">
          <Mana v-for="(type, index) in types" :symbol="type" size="4x" :key="index"></Mana>
        </div>
      </div>
    </v-navigation-drawer>
    <v-flex xs12> 
      <v-form @submit.prevent="searchCards">
        <v-layout>
          <v-flex xs9 md11>
            <v-text-field
              v-model="searchQuery"
              label="Søk"
              placeholder="Søk etter kort"
            ></v-text-field>
          </v-flex>
          <v-flex xs3 md1>
            <v-btn type="submit" color="success">Søk</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
      <v-layout row>
        <v-flex xs12>
          <v-dialog
            v-model="loading"

            persistent
            width="300"
          >
            <v-card
              color="dark"
              dark
            >
              <v-card-text>
                Laster kort...
                <v-progress-linear
                  indeterminate
                  color="grey"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex v-if="cards.length > 0" xs6 text-md-left>
          <p>Vi fant <strong>{{ total }}</strong> kort du kan se på</p>
        </v-flex>
        <v-flex v-if="cards.length > 0" xs6 text-md-right>
          <p v-if="page">Viser side <strong>{{ page }}</strong> av <strong>{{ pages }}</strong></p>
          <p v-else>Viser side 1 av 1</p>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-alert
            v-if="cards.length < 1 && loading === false"
            value="true"
            color="error">
            Vi fant ingen kort med kriteriene du har valgt.
          </v-alert>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
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
            v-if="!loading && pages"
            :length="pages"
            :value="page"
            @input="getMoreCards"
            total-visible="20"
            dark>
          </v-pagination>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import { Mana } from '@saeris/vue-mana'
import 'mana-font';

export default {
  name: 'Cards',
  components: {
    Mana
  }, 
  data() {
    return {
      searchQuery: '',
      mana: this.generateArray(8),
      colors: ['r', 'w', 'b', 'u', 'g', 'c'],
      types: ['artifact', 'creature', 'enchantment', 'instant', 'land', 'planeswalker', 'sorcery']
    }
  },
  computed: {
    ...mapGetters('cards', ['cards', 'searching', 'loading', 'error', 'total','pages', 'page'])
  },
  methods: {
    generateArray(number) {
      let numbers = [];

      for (let i = 0; i < number; i++) {
        numbers.push(i.toString())
      }

      return numbers;
    },
    getMoreCards(value) {
      if(this.searching) {
        this.$store.dispatch('cards/searchCards', { q: this.searchQuery, page: value })
      } else {
        this.$store.dispatch('cards/getAllCards', { page: value })
      }
    },
    searchCards() {
      if(this.searchQuery !== '') {
        this.$store.dispatch('cards/searchCards', { q: this.searchQuery, page: 1 })
      } else {
        this.$store.dispatch('cards/getAllCards', { page: 1 })
      }
      
    },
  },
  beforeMount() {
    this.$store.dispatch('cards/getAllCards', { page: 1 })
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
    color: white;
  }
  .card-filters {
    padding: 0 1.5rem;
  }
  .color-filter, .mana-filter, .type-filter {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .v-subheader {
    padding: 25px 0 15px 2px;
  }
  .ms-cost {
    color: #424242;
  }
  .ms-cost.ms-3x {
    line-height: 2.2rem;
  }
  .ms-cost.ms-4x {
    line-height: 3rem;
  }
  .ms:hover {
    color: black;
    cursor: pointer;
  }
  .ms-cost:hover {
    background-color: white;
  }
  .cards-found {
    font-weight: bold;
  }
</style>
