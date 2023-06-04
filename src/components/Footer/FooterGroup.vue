<template>
    <div class="footer-container">
        <button @click="goToGameStartScreen">Ana Menü</button>
        <button @click="restart">Tekrar Başlat</button>
    </div>
</template>

<script>
export default {
    name: "footer-group",
    methods: {
        goToGameStartScreen() {
            this.$store.commit("SET_ACTİVECOMP", "WelcomeScreen")
            this.$store.commit("SET_ISWİNNER", { gameEnd: false, isWin: false })
            this.$store.commit("SET_GAMELİFE")
        },
        restart() {
            this.$store.commit("SET_ACTİVECOMP", "WelcomeScreen")
            setTimeout(() => {
                this.$store.commit("SET_ACTİVECOMP", "Home")

            }, 1);
            this.$store.dispatch("restartGame")
            // this.$store.commit("SET_GAMELİFE")

        }
    }
}
</script>

<style>
.footer-container {
    display: flex;
    height: 10%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
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