<template>
  <div>
    <div>
      <Result v-if="showResult" :user="currentUser" :gamemode="gamemode" @win="win" :boss="boss" :wins="wins"
        :result="victory" @lose="lose" />
    </div>
    <br />
    <Game ref="game" :boss="boss" :tries="tries" @lose="lose" @openModal="openModal" :reset-game="resetGame"></Game>
  </div>
</template>

<script>
import Game from "../components/Game/Game.vue";
import Result from "../components/Game/Result.vue";
import BossDataService from '../services/BossDataService';
import UserDataService from '../services/UserDataService';

export default {
  name: "BossRush",
  components: {
    Game,
    Result,
  },
  data() {
    return {
      nId: 0,
      currentUser: {},
      boss: {},
      max: 25,
      wins: 0,
      gamemode: "bossrush",
      tries: 5,
      showResult: false,
      victory: false,
    };
  },
  methods: {
    selectTarget(max) {
      let number = Math.floor(Math.random() * (max - 1) + 1);

      BossDataService.get(number)
        .then(res => {
          this.boss = res.data;
          this.nId = this.boss.id;
        })
        .catch((e) => console.log(e));
    },
    openModal(victory) {
      this.showResult = true;
      this.victory = victory;
    },
    win() {
      this.wins++;
      this.selectTarget(this.max);
      this.showResult = false;
      this.$refs.game.restartGame();
    },
    lose() {
      console.log(this.currentUser)
      if (this.wins > this.currentUser.max_score) {
        this.currentUser.max_score = this.wins;
        UserDataService.update(localStorage.getItem('userID'), this.currentUser)
          .then(res => {
            console.log(res);
            this.nextGame();
          })
      }
      else {
        this.nextGame();
      }
    },
    nextGame() {
      this.wins = 0;
      this.selectTarget(this.max);
      this.showResult = false;
      this.$refs.game.restartGame();
    },
    getUser() {
      if (localStorage.getItem('userID') !== null) {
        UserDataService.get(localStorage.getItem('userID'))
          .then(res => {
            this.currentUser = res.data;
          })
          .catch((e) => console.log(e));
      }
    },
  },
  mounted() {
    this.getUser();
    this.selectTarget(this.max);
  },
};
</script>
