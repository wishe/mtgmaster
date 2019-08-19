<template>
  <div class="card-filters">
    <v-subheader>Farge</v-subheader>
    <div class="color-filter">
      <Mana @click="colorChange(item)" v-for="(item, index) in colors" :symbol="item" size="4x" cost :key="index" :class="{'active': color.includes(item)}"></Mana>
    </div>
    <v-subheader>Mana</v-subheader>
    <div class="mana-filter">
      <Mana @click="manaCostChange(item)" v-for="(item, index) in manas" :symbol="item" size="3x" cost :key="index" :class="{'active': mana.includes(item)}"></Mana>
    </div>
    <v-subheader>Type</v-subheader>
    <div class="type-filter">
      <Mana @click="cardTypeChange(item)" v-for="(item, index) in types" :symbol="item" size="4x" :key="index" :class="{'active-type': type.includes(item)}"></Mana>
    </div>
    <v-subheader>Filtrer med tekst</v-subheader>
    <div class="text-filter">
      <v-text-field @input="debounceFilterText"
      ></v-text-field>
    </div>
  </div>
</template>
<script>
import _ from 'lodash';
import { Mana } from '@saeris/vue-mana'
import 'mana-font';

export default {
  name: 'FilterCards',
  components: {
    Mana
  },
  data() {
    return {
      manas: this.generateArray(8),
      colors: ['r', 'w', 'b', 'u', 'g', 'c'],
      types: ['artifact', 'creature', 'enchantment', 'instant', 'land', 'planeswalker', 'sorcery'],
      color: [],
      mana: [],
      type: [],
      text: ''
    }
  },
  computed: {
    filterString() {
      let string = '';

      if(this.color.length > 0) {
        string += ` c:${this.color.join('')}`;
      }
      if(this.mana.length > 0) {
        string += ` cmc:${this.mana.join(' or ')}`; 
      }
      if(this.type.length > 0) {
        string += ` t:${this.type.join(' or ')}`;
      }
      if(this.text.length > 0) {
        string += ` o:"${this.text}"`;
      }

      return string
    }
  },
  methods: {
    generateArray(number) {
      let numbers = [];

      for (let i = 0; i < number; i++) {
        numbers.push(i.toString())
      }

      return numbers;
    },
    cardTypeChange(type) {
      let index = this.type.findIndex(item => item === type);
      if(index !== -1) {
        this.type.splice(index, 1);
      } else {
        this.type.push(type);
      }
    },
    manaCostChange(mana) {
      let index = this.mana.findIndex(item => item === mana);
      if(index !== -1) {
        this.mana.splice(index, 1);
      } else {
        this.mana.push(mana);
      }
    },
    colorChange(color) {
      let index = this.color.findIndex(item => item === color);
      if(index !== -1) {
        this.color.splice(index, 1);
      } else {
        this.color.push(color);
      }
    },
    debounceFilterText: _.debounce(function (val) {
      this.text = val
    }, 500)
  },
  watch: {
    filterString: function(val) {
      this.$emit('updateQuery', this.filterString);
    }
  }
}
</script>
<style lang="scss" scoped>
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
  .ms:hover:not(.active) {
    color: black;
  }
  .ms:hover {
    cursor: pointer;
  }
  .ms-cost:hover:not(.active) {
    background-color: white;
  }
  .active {
    background-color: #212121;
    color: #e4ce88;
  }
  .active-type {
    color: #e4ce88;
  }
  .v-text-field {
    padding-top: 0;
    margin-top: 0;
    padding-left: .2rem;
    padding-right: .2rem;
  }
</style>