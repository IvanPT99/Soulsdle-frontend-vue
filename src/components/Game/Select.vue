<template>
  <div>
    <input id="search" type="text" class="p-2 text-white border-2 rounded-sm lp-2 rp-2 bg-accent border-primary"
      v-model="searchTerm" placeholder="Type any boss from the Souls saga" />
    <div v-if="showOptions" class="mt-3 overflow-y-scroll text-white border bg-accent border-primary max-h-40">
      <button v-for="option in filteredOptions" :key="option.id" @click="selectOption(option)"
        class="block w-full px-2 py-1 text-left hover:bg-gray-200 focus:bg-gray-200">
        <div style="display: flex; align-items: center; gap: 8px">
          <img :src="option.image" class="w-8 h-8" />
          <span>{{ option.name }}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import BossDataService from '../../services/BossDataService';

export default {
  name: "Select",
  data() {
    return {
      options: [],
      searchTerm: "",
    };
  },
  props: {
    showGameTable: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    filteredOptions() {
      return this.options.filter((option) =>
        option.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    showOptions() {
      return this.searchTerm.length > 0 && this.filteredOptions.length > 0;
    },
  },
  methods: {
    selectOption(option) {
      console.log("Selected:", option);
      document.getElementById("search").value = "";
      this.searchTerm = "";
      this.$emit("option-selected", option);
      this.$emit("show-game-table", true);
    },
    getBosses() {
      // const res = await fetch("http://localhost:3001/bosses");
      // const finalRes = await res.json();
      // this.options = finalRes;

      BossDataService.getAll()
        .then(res => {
          this.options = res.data;
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.getBosses();
  },
};
</script>
