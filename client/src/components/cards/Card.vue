<template>
  <v-flex xs6 sm3 lg2
    class="card-holder">
      <img v-if="card.image_uris" :src="card.image_uris.large" alt="">
      <img v-else src="http://placehold.jp/250x350.png" alt="">
  </v-flex>
</template>
<script>
export default {
  name: 'Card',
  props: ['card']
}
</script>
<style lang="scss" scoped>
  img {
    width: 100%
  }
  .card-holder {
    padding: .5rem;
    cursor: pointer;
  }
</style>