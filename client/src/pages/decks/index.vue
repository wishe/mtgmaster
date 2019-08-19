<template>
  <v-layout row>
    <v-navigation-drawer 
      app 
      dark
      floating>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Decks
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense class="pt-0" dark>
        <v-list-tile v-for="item in menu" :key="item.title" :to="{ name: item.to }" href>
          <v-list-tile-action>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.name }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-flex fluid>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'Mine Decks',
          to: 'MyDecks',
          icon: 'user'
        },
        {
          name: 'Spillegruppe Decks',
          to: 'PlaygroupDecks',
          icon: 'watch'
        }
        
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .v-list__tile {
    a {
      color: white;
      font-weight: 500;
      text-decoration: none;
    }
  }
</style>