<template>
    <div ref="confetti" id="modal" class="modal">
        <div v-if="isWinner" class="message message-win">
            Congratulations, you win !
        </div>
        <div v-else class="message message-lost">
            Sorry, you lost... Hahahaha not SORY
        </div>
    </div>
</template>

<script>
import party from "party-js";
export default {
    name: 'message-comp',
    props: {
        isWinner: Boolean
    },
    mounted() {
        this.isWinner ? this.confettiFn() : ""
    },
    methods: {
        confettiFn() {
            setTimeout(() => {
                party.confetti(this.$refs.confetti, {
                    count: 130
                });
            }, 300);
        }
    }
}
</script>

<style>
.modal {
    width: 60%;
    height: 20%;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    padding: 20px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 10px #cccccc;
    border-radius: 10px;
    z-index: 1000;
    background-color: rgb(179, 170, 170);
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 48px;
}

.message-lost {
    color: red;
}

.message-win {
    color: green;
}
</style>