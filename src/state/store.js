import Vue from "vue";
import Vuex from "vuex";
// import cardsImg from '../assets/cards/card-back.png';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        activeComponent: "WelcomeScreen",
        isSettingModal: false,
        isWinner: {
            gameEnd: false,
            isWin: false,
        },
        settingParameters: {
            cardCount: 4,
            winnerCard: "Kupa Kizi",
            isTimer: false,
            gameLife: "",
            gameTime: 5,
            cardOption: [
                {
                    title: "Kupa Kizi",
                    src: require("@/assets/cards/queen_of_hearts2.png"),
                    isShow: true
                },
                {
                    title: "Maca Kizi",
                    src: require("@/assets/cards/queen_of_spades2.png"),
                    isShow: true
                },
                {
                    title: "Sinek Kizi",
                    src: require("@/assets/cards/queen_of_clubs2.png"),
                    isShow: true
                },
                {
                    title: "Karo Kizi",
                    src: require("@/assets/cards/queen_of_diamonds2.png"),
                    isShow: true
                },
                {
                    title: "Kupa Papazi",
                    src: require("@/assets/cards/king_of_hearts2.png"),
                    isShow: false
                },
                {
                    title: "Maca Papazi",
                    src: require("@/assets/cards/king_of_spades2.png"),
                    isShow: false
                },
                {
                    title: "Sinek Papazi",
                    src: require("@/assets/cards/king_of_clubs2.png"),
                    isShow: false
                },
                {
                    title: "Karo Papazi",
                    src: require("@/assets/cards/king_of_diamonds2.png"),
                    isShow: false
                },
            ]
        },

    },
    getters: {
        getActiveComp(state) {
            return state.activeComponent
        },
        getIsSettingModal(state) {
            return state.isSettingModal
        },
        getSettingParam(state) {
            return state.settingParameters
        },
        getIsWinner(state) {
            return state.isWinner
        },
        getGameLife(state) {
            return state.settingParameters.gameLife
        }
    },
    mutations: {
        SET_ACTİVECOMP(state, data) {
            state.activeComponent = data;
        },
        SET_ISSETTİNGMODAL(state, data) {
            state.isSettingModal = data;
        },
        SET_SETTİNGSPARAM(state, data) {
            state.settingParameters = data
        },
        SET_ISWİNNER(state, data) {
            state.isWinner = data
        },
        SET_GAMELİFE(state) {
            const cardCount = state.settingParameters.cardCount;
            cardCount == 4 ? state.settingParameters.gameLife = 1 : cardCount == 6 ? state.settingParameters.gameLife = 2 : state.settingParameters.gameLife = 3
        },
        SET_DECREASE_GAMELİFE(state){
            state.settingParameters.gameLife--
        }
    },
    actions: {
        actionActiveComp({ commit }, data) {
            commit("SET_ACTİVECOMP", data)
        },
        actionIsSettingsModal({ commit }, data) {
            commit("SET_ISSETTİNGMODAL", data)
        },
        actionSettingsParam({ commit }, data) {
            commit("SET_SETTİNGSPARAM", data)
        },
        restartGame({ commit, state }) {
            let isWinner = {
                gameEnd: false,
                isWin: false
            }
            commit("SET_ACTİVECOMP", "WelcomeScreen")
            setTimeout(() => {
                commit("SET_ACTİVECOMP", "Home")

            }, 1);
            commit("SET_SETTİNGSPARAM", state.settingParameters)
            commit("SET_ISWİNNER", isWinner)
            commit("SET_GAMELİFE")
        }
    }
})
export default store