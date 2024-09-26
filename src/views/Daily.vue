<template>
  <div>
    <div>
      <Result v-if="showResult" :boss="boss" :gamemode="gamemode" @win="win" @lose="lose" :result="victory" />
    </div>
    <br>
    <Game v-if="!showResult" @saveSelecteds="saveSelecteds" :gamemode="gamemode" ref="game" :boss="boss" :tries="tries"
      @lose="lose" @openModal="openModal">
    </Game>
  </div>
</template>

<script>
import Game from "../components/Game/Game.vue";
import Result from "../components/Game/Result.vue";
import BossDataService from '../services/BossDataService';
import GameDataService from '../services/GameDataService';
import PlayDataService from '../services/PlayDataService';

export default {
  name: "Daily",
  components: {
    Game,
    Result,
  },
  data() {
    return {
      gameId: 0,
      boss: {},
      selectedIds: [],
      gamemode: "daily",
      tries: 99,
      showResult: false,
      victory: false,
    };
  },
  methods: {
    firstStep() {
      GameDataService.getLast()
        .then(res => {
          this.gameId = res.data.id;
          this.getBoss(res.data.boss_id);
        })
    },
    logged() {
      if (localStorage.getItem('userID') !== null) {
        return true;
      } else {
        return false;
      }
    },
    getBoss(id) {
      BossDataService.get(id)
        .then(res => {
          this.boss = res.data;
          console.log(this.boss);
          this.checkPlay();
        })
    },
    storePlay(gameId, userId, bossId) {
      console.log(gameId + "/" + userId + "/" + bossId);
      PlayDataService.create(gameId, userId, bossId);
    },
    openModal(victory) {
      this.showResult = true;
      this.victory = victory;
    },
    win() {
      console.log("ganaste");
      this.serviceSaveGame();
    },
    serviceSaveGame() {
      PlayDataService.get(this.gameId, localStorage.getItem('userID'))
        .then(res => {
          let data = res.data[0];
          data.bosses_ids = this.selectedIds;
          data.win = this.victory;

          PlayDataService.update(res.data[0].id, data)
            .then(res => {
              window.location.replace("/boss-rush")
            })
        })
    },
    checkPlay() {
      PlayDataService.get(this.gameId, localStorage.getItem('userID'))
        .then(res => {
          if (res.data.length == 0) {
            this.storePlay(this.gameId, localStorage.getItem('userID'), this.boss.id)
          } else if (res.data[0].win === null) {
          } else {
            let victory;
            console.log(res.data[0].win == 1);
            if (res.data[0].win == 1) {
              victory = true;
            } else {
              victory = false;
            }
            this.openModal(victory)
          }
        });
    },
    lose() {
      console.log("perdiste");
      this.serviceSaveGame();
    },
    saveSelecteds(selectedOptions) {
      selectedOptions.forEach(element => {
        this.selectedIds.push(element.id)
      });
    }
  },
  mounted() {
    if (this.logged()) {
      this.firstStep();
    } else {
      window.location.replace("/login");
    }
  },
};
</script>
