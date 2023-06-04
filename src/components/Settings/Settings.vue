<template>
  <div class="setting-modal-container">
    <div class="setting-modal">
      <div @click="closeModal">
        <span class="close  material-symbols-outlined">
          close
        </span>
      </div>
      <form @submit.prevent="saveSettings">
        <div>Kart Sayisi
          <div>
            <select v-model="form.cardCount">
              <option disabled value="">Please Select</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
        <div>kazanan kart
          <div><select v-model="form.winnerCard">
              <option disabled value="">Please Select</option>
              <option v-for="(item, index) in cardOption" :key="index" v-show="item.isShow" :value="item.title">{{
                item.title }}
              </option>
            </select></div>
        </div>
        <div>
          <label for="checkbox">Timer</label>
          <input type="checkbox" id="checkbox" v-model="form.isTimer" />
        </div>
        <div v-if="form.isTimer">
          <label for="checkbox">Süre</label>
          <input type="number" @blur="changeTime" v-model="form.gameTime" min="5" max="120" />
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: "settings-modal",
  data() {
    return {
      form: {}
    }
  },
  created() {
    this.fillTheForm()
  },
  methods: {
    closeModal() {
      this.$store.commit("SET_ISSETTİNGMODAL", false)
    },
    fillTheForm() {
      this.form = _.clone(this.getSettingParam)
    },
    saveSettings() {
      this.form.gameLife = this.form.cardCount == 4 ? 1 : this.form.cardCount == 6 ? 2 : this.form.cardCount == 8 ? 3 : "",
      this.$store.commit('SET_SETTİNGSPARAM', this.form)
      this.$store.commit("SET_ISSETTİNGMODAL", false)
      this.$store.dispatch("restartGame")
    },
    changeTime(e) {
      let time = e.target.value
      time < 5 ? this.form.gameTime = 5 : time > 120 ? this.form.gameTime = 120 : this.form.gameTime = time
    }
  },
  computed: {
    cardOption() {
      let temp = this.getSettingParam
      temp['cardOption'].map((item, index) => {
        index < temp.cardCount ? item.isShow = true : item.isShow = false
      })
      return temp.cardOption
    },
    getSettingParam: {
      get() {
        return this.$store.getters.getSettingParam;
      },
    },
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

.setting-modal-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.setting-modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  height: 100%;
  box-shadow: 0px 0px 10px #cccccc;
}

.close {
  margin: 20px 0 0 5px;
  cursor: pointer;
}
</style>