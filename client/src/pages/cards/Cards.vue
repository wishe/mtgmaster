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
      <FilterCards @updateQuery="updateQuery"></FilterCards>
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
        <Card v-for="(card, index) in cards" :key="index" :card="card"></Card>
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
import FilterCards from '../../components/cards/FilterCards'
import Card from '../../components/cards/Card'
import { mapGetters } from 'vuex'

export default {
  name: 'Cards',
  components: {
    FilterCards,
    Card
  }, 
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapGetters('cards', ['cards', 'searching', 'loading', 'error', 'total','pages', 'page'])
  },
  methods: {
    getMoreCards(value) {
      if(this.searching) {
        this.$store.dispatch('cards/searchCards', { q: this.searchQuery, page: value })
      } else {
        this.$store.dispatch('cards/getAllCards', { page: value })
      }
    },
    searchCards() {
      if(this.searchQuery !== '') {
        this.$store.dispatch('cards/searchCards', { q: this.searchQuery })
      } else {
        this.$store.dispatch('cards/getAllCards', { page: 1 })
      }
      
    },
    updateQuery(e) {
      console.log('query update');
      this.searchQuery = e;
    },
  },
  watch: {
    searchQuery: function() {
      console.log(this.searchQuery);
      clearTimeout(searchTimer);
      const searchTimer = setTimeout(() => {
        this.searchCards();
      }, 1000)
    }
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
  .cards-found {
    font-weight: bold;
  }
</style>
