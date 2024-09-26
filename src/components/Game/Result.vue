<template>
  <div class="flex items-center justify-center h-96">
    <div :class="{
      'p-2 mb-3 text-center bg-opacity-75 border-2 rounded-md h-96 bg-win w-96 border-primary':
        result,
      'p-2 mb-3 text-center bg-opacity-75 border-2 rounded-md h-96 bg-lose w-96 border-primary':
        !result,
    }">
      <div v-if="result" class="text-2xl font-bold text-white">
        Victory Achieved
      </div>
      <div v-else class="text-2xl font-bold text-white">You DIED</div>
      <br />
      <div class="flex items-center text-white bg-opacity-75 border-2 bg-secondary">
        <img class="text-white border-r-2" :src="boss.image ? boss.image : 'src/assets/undefined.png'" />
        <span class="ml-2">{{ boss.name }}</span>
      </div>
      <br />
      <div class="flex" v-if="gamemode == 'bossrush'">
        <span class="ml-8 text-left">Current strike:{{ wins + 1 }}</span>
        <span class="ml-auto mr-10 text-right">Record: {{ user.max_score }}</span>
      </div>
      <div
        class="flex items-center justify-center h-24 p-2 text-center border-2 rounded-md bg-accent text-primary w-90 border-primary"
        v-else>
        <span class="">Next daily boss TOMORROW</span>
      </div>
      <br />
      <button v-if="result"
        class="px-4 py-2 font-bold border-2 rounded bg-primary text-secondary hover:bg-secondary hover:text-primary"
        @click="nextGame">
        NEXT
      </button>
      <button v-else
        class="px-4 py-2 font-bold border-2 rounded bg-primary text-secondary hover:bg-secondary hover:text-primary"
        @click="lose">
        RESTART
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  methods: {
    nextGame() {
      this.$emit("win");
    },
    lose() {
      this.$emit("lose");
    }
  },
  props: {
    boss: {},
    user: {},
    result: Boolean,
    wins: Number,
    gamemode: String,
  },
};
</script>
<style></style>
