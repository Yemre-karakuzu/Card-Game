<template>
  <div class="header-container">
    <div v-for="(item, index) in headerText" :key="index">
      <span> {{ item.title }} : {{ item.value }} </span>
    </div>
    <span @click="openSetting" class="icon material-symbols-outlined">
      settings
    </span>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "headerHome",
  data() {
    return {
      headerText: [],
      time: 0,
    };
  },
  created() {
    this.fillHeaderText();
  },
  watch: {
    "$store.getters.getSettingParam": {
      handler: "fillHeaderText",
      deep: true,
    },
    time() {
      var tempDate = this.$store.getters.getSettingParam;
      if (tempDate.isTimer) {
        if (tempDate.gameLife == 0) {
          this.$store.commit("SET_ISWİNNER", { gameEnd: true, isWin: false });
          return;
        }
        setTimeout(() => {
          if (this.time !== 0) {
            this.headerText[3].value--;
            this.time--;
          } else {
            if (tempDate.gameLife != 0) {
              this.$store.commit("SET_DECREASE_GAMELİFE");
            }
          }
        }, 1000);
      }
    },
  },
  computed: {
    getSettingsParams() {
      return this.$store.getters.getSettingParam;
    },
  },
  methods: {
    openSetting() {
      this.$store.commit("SET_ISSETTİNGMODAL", true);
    },
    fillHeaderText() {
      var temp = _.clone(this.getSettingsParams);
      this.time = temp.gameTime;
      delete temp.cardOption;
      delete temp.cardCount;
      let key = Object.keys(temp);
      this.headerText = key.map((item) => {
        return {
          title: item,
          value: temp[item],
        };
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");

/* <link rel="stylesheet" href="" /> */
.header-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10%;
  background-color: rgb(179, 170, 170);
}

.icon {
  cursor: pointer;
}
</style>
