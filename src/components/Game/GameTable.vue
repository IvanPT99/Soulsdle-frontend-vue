<template>
  <div>
    <div class="container">
      <div class="flex justify-center">
        <div class="grid justify-center grid-cols-8">
          <div v-for="(title, index) in titles" :key="title"
            class="flex items-center justify-center w-20 p-1 m-1.5 my-5 text-xs text-white border-b-2 border-white">
            <div class="text-center">{{ title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

const data = reactive({
  titles: [
    "Boss",
    "Weapon",
    "Element",
    "Importance",
    "Race",
    "Gender",
    "Movement",
    "Game",
  ],
});

export default {
  setup() {
    const { titles } = toRefs(data);

    return {
      titles,
    };
  },
};
</script>
