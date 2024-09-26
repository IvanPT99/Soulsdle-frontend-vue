<script>
import BossDataService from '../../services/BossDataService';

export default {
  name: "BossCard",
  props: {
    id: {
      type: Number,
      required: true
    },
    win: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      boss: {},
    }
  },
  methods: {
    getBoss() {
      BossDataService.get(this.id)
        .then(res => {
          console.log(res.data)
          this.boss = res.data;
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.getBoss();
  }
}
</script>

<template>
  <div class="flex items-center justify-between gap-2 pr-4 bg-gray-500 rounded-md shadow-md"
    :class="{ 'bg-green-400': win == 1, 'bg-red-400': win == 0 }">
    <div class="flex items-center">
      <img class="w-20 rounded-xl" :src="boss?.image" alt="Profile image">
      <p class="px-3 text-3xl font-bold text-accent">
        {{ boss.name }}
      </p>

    </div>
  </div>
</template>