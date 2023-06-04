<template>
  <div @click="flip" v-if="cardData.isShow" :class="isOpen ? 'open card' : 'card'">
    <div class="faces">
      <div class="front red">
        <img :src="cardData.src" alt="">
      </div>
      <div class="back">
        <img class="img" :src="backFace" alt="">
      </div>
    </div>


  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: "card-item",
  props: {
    cardData: Object
  },
  data() {
    return {
      isOpen: false,
      backFace: require('@/assets/cards/playing-cards-back.jpg'),
      life: 0
    }
  },
  methods: {
    flip() {
      let deneme = this.getIsWinner
      if (!deneme.gameEnd) {
        this.isOpen = true
        this.life = _.clone(this.gameLife.gameLife)
        this.isWin()
      }
      else {
        return
      }

    },
    isWin() {
      let win = this.$store.getters.getSettingParam;
      this.life--
      win.gameLife = this.life
      this.$store.commit("SET_SETTİNGSPARAM", win)
      win = win.winnerCard
      setTimeout(() => {
        if (win === this.cardData.title) {
          this.$store.commit("SET_ISWİNNER", { gameEnd: true, isWin: true })
        }
        else {
          if (this.life === 0) {
            this.$store.commit("SET_ISWİNNER", { gameEnd: true, isWin: false })
            this.loseFlipOtherCard()
          }
        }
      }, 1000);
    },
    loseFlipOtherCard() {
      let element = document.getElementsByClassName("card")
      for (let i = 0; i < element.length; i++) {
        element[i].classList.add("open")
      }
    }
  },
  watch:{
    getIsWinner(){
      this.loseFlipOtherCard()
    }
  },
  computed: {
    gameLife() {
      return this.$store.getters.getSettingParam;
    },
    getIsWinner() {
      return this.$store.getters.getIsWinner;
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

.img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.card {
  height: 250px;
  width: 180px;
  position: relative;
  transform-style: preserve-3d;
  cursor: pointer;
  z-index: 10;
  padding: 10px;
}

.faces {
  height: 100%;
  width: 100%;

  transform-style: preserve-3d;
  border: 1px solid #ccc;
  border-radius: 10px;

  animation: rotate 0.5s;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

.open .faces {
  animation-play-state: running;
}

.close .back {
  animation-play-state: running;
}

@keyframes rotate {
  100% {
    transform: rotateY(180deg);
  }
}

.front,
.back {
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;
}

.front {
  background-color: #fff;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.corner-bottom {
  align-self: end;
  transform: rotate(180deg);
}

.center {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.center .line {
  display: flex;
  justify-content: space-around;
}
</style>