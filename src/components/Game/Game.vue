<template>
  <div class="flex flex-col items-center">
    <div v-if="!showGameTable" class="p-2 text-center text-white border-2 rounded-md bg-accent w-96 border-primary">
      <p>Try to guess the boss from the Soul's saga.</p>
      <p>
        Type and select one boss to see what information does it gives to you
        and try to reach the target :D
      </p>
    </div>
    <!--<div
      else
      class="p-2 text-center text-white border-2 rounded-md w-60 bg-accent border-primary"
    >
      <p>Win streak: {{ wins }}</p>
    </div>
    -->
    <Select v-if="showSelect" :showGameTable="showGameTable" @show-game-table="showGameTable = true"
      :optionSelected="optionSelected" @option-selected="optionSelected" class="flex flex-col justify-center p-2">
    </Select>
    <div v-if="showGameTable">
      <GameTable></GameTable>
      <div v-for="(selectedOption, index) in selectedOptionsReversed" :key="index">
        <div class="flex items-center justify-center">
          <SelectedOption :selectedOption="selectedOption" :target="boss"></SelectedOption>
        </div>
      </div>
    </div>
    <br />
    <div v-if="showGameTable"
      class="grid items-center justify-center h-24 grid-cols-3 p-2 mb-3 text-center border-2 rounded-md bg-accent text-primary w-90 border-primary">
      <div class="">
        <div>🟩</div>
        <div>Correct</div>
      </div>
      <div>
        <div>🟨</div>
        <div>Partially Correct</div>
      </div>
      <div class="">
        <div>🟥</div>
        <div>Incorrect</div>
      </div>
    </div>
  </div>
</template>

<script>
import Select from "./Select.vue";
import GameTable from "./GameTable.vue";
import SelectedOption from "./SelectedOption.vue";
import Result from "./Result.vue";

export default {
  name: "Game",
  components: {
    Select,
    GameTable,
    SelectedOption,
    Result,
  },
  props: {
    boss: {},
    wins: Number,
    tries: Number,
    gamemode: String,
  },
  data() {
    return {
      showGameTable: false,
      selectedOption: null,
      selectedOptions: [],
      count: 0,
      showSelect: true,
    };
  },
  methods: {
    optionSelected(option) {
      this.selectedOption = option;
      this.selectedOptions.push(option);
      this.count++;
      this.showGameTable = true;

      if (option.name === this.boss.name) {
        this.showSelect = false;
        this.$emit("openModal", true);
        if (this.gamemode == "daily") {
          this.$emit("saveSelecteds", this.selectedOptionsReversed);
        }
      } else {
        if (this.count == this.max) {
          this.showSelect = false;
          this.$emit("openModal", false);
          if (this.gamemode == "daily") {
            this.$emit("saveSelecteds", this.selectedOptionsReversed);
          }
        }
      }
    },
    restartGame() {
      this.selectedOptions = [];
      this.count = 0;
      this.showGameTable = false;
      this.selectedOption = null;
      this.showSelect = true;
    },
  },
  computed: {
    selectedOptionsReversed() {
      // crea una copia de las opciones seleccionadas en orden inverso
      return [...this.selectedOptions].reverse();
    },
    max() {
      return this.tries;
    },
  },
};
</script>
