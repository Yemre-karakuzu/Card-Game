<template>
  <div class="cards-container">
    <Card v-for="(item, index) in cardOption" :key="index" :cardData="item" />
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
  name: "cards-item",
  components: {
    Card
  },
  created() {
    this.shuffleCard()
  },
  methods: {
    shuffleCard() {
      let deck = this.cardOption
      deck = deck.filter(item => item.isShow)
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  },
  computed: {
    cardOption() {
      let temp = this.$store.getters.getSettingParam
      temp['cardOption'].map((item, index) => {
        index < temp.cardCount ? item.isShow = true : item.isShow = false
      })
      let deck = temp.cardOption
      deck = deck.filter(item => item.isShow)
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck
    },
  }
}
</script>

<style>
.cards-container {
  perspective: 800px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
</style>