<template>
  <div class="home-container">
    <Header />
    <Cards />
    <FooterGroup />
    <Message :isWinner="getIsWinner.isWin" v-if="getIsWinner.gameEnd" />
  </div>
</template>

<script>
import Cards from '@/components/Cards/Cards.vue';
import Header from '@/components/Header/Header.vue';
import FooterGroup from '@/components/Footer/FooterGroup.vue';
import Message from '@/components/HelperComponent/Message.vue';
import { mapGetters } from 'vuex';
export default {
  name: "homeGame",
  components: {
    Cards,
    Header,
    FooterGroup,
    Message
  },
  computed: {
    ...mapGetters([
      'getIsWinner',
    ])
  }
}
</script>

<style>
.home-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
</style>