<template>
  <div class="game-container">
    <component :is="getActiveComp"></component>
    <Settings v-if="getIsSettingModal" />
  </div>
</template>

<script>
import Home from '@/components/Home.vue';
import WelcomeScreen from '@/components/WelcomeScreen.vue';
import Settings from '@/components/Settings/Settings.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    Home,
    WelcomeScreen,
    Settings,
  },
  computed: {
    ...mapGetters([
      'getActiveComp',
      'getIsSettingModal',
    ])
  }
}
</script>

<style>
.game-container {
  height: 100%;
}
</style>