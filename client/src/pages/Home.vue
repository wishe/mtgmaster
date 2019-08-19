<template>
  <v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Velkommen til MTG Master</h3>

          <span class="subheading">Her kan du bygge og lagre decks, dele decks med venner og generere drafts.</span>

          <v-divider class="my-3"></v-divider>

          <div v-if="!auth" class="title mb-3">Register deg og kom i gang</div>

          <v-btn
            v-if="!auth"
            :to="{ name: 'Login' }"
            class="mx-0"
            color="primary"
            large>
            Register deg her
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>
<script>
import { mapGetters } from 'vuex'


export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      auth: 'auth/check'
    })
  }
};
</script>
