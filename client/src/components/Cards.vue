<template>
  <v-layout justify-center>
    <v-flex xs12 sm8>
      <v-layout row wrap>
        <v-flex
          v-for="(card, index) in cards"
          :key="index">
          <v-card>
            <img :src="card.image_uris.normal" alt="">
            <v-btn
              absolute
              bottom
              dark
              fab
              right
              color="pink"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Cards',
  data() {
    return {
      cards: [],
      menu: false,
    };
  },
  computed: {
    filteredCards() {
      return this.cards.slice(3, -1);
    },
  },
  methods: {
    getCards() {
      axios.get('https://api.scryfall.com/cards/search?q=c%3Ablack+cmc%3D5').then((res) => {
        this.cards = res.data.data;
      }).catch(() => {
      });
    },
  },
  beforeMount() {
    this.getCards();
  },
};
</script>
<style lang="scss" scoped>
  img {
    padding: .5rem;
    width: 250px;
  }
</style>
