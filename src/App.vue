<template>
  <div id="app">
    <GameContainer />
  </div>
</template>

<script>

import GameContainer from './views/GameContainer.vue';
export default {
  name: 'App',
  components: {
    GameContainer
  },
}
</script>

<style>
@import '@/assets/normalize.css';

#app {
  height: 100vh;
  width: 100vw;
  background-color: rgb(14, 153, 44);
  font-family: fantasy;
}
</style>
