<template>
  <div class='screen' id='welcome-screen'>
    <div class="welcome-context">
      <h1>Welcome to our "Bul Karayı Al Parayı" game!</h1>
      <h4>Check your settings, start the game and get ready to lose.</h4>
    </div>
    <div class="welcome-btngroup">
      <button @click="playGame" class="start-btn">Start</button>
      <button @click="openSetting" class="start-btn">Setting</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "welcomeScreen",
  methods: {
    playGame() {
      this.$store.commit("SET_ACTİVECOMP", "Home")
      this.$store.commit("SET_GAMELİFE")

    },
    openSetting() {
      this.$store.commit("SET_ISSETTİNGMODAL", true)
    }
  }
}
</script>

<style scoped >
.screen {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.welcome-context {
  font-size: 40px;
  color: red;
  display: contents;
  font-weight: bold;
}

.welcome-btngroup {
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin-top: 40px;
}

button {
  background-color: rgba(255, 255, 255, .7);
  border: none;
  outline: none;
  border-radius: 19px;
  box-shadow: 3px 3px 7px black;
  font-size: 12px;
  min-height: 40px;
  width: 20%;
  cursor: pointer;
}
</style>