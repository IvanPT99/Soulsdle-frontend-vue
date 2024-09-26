<template>
  <div class="flex items-center">
    <div id="row" v-if="selectedOption" class="grid justify-center grid-cols-8">
      <div v-for="(title, index) in elements" :key="title" :class="{
        'flex': true,
        'items-center': true,
        'justify-center': true,
        'text-center': true,
        'h-20': true,
        'w-20': true,
        'p-1': true,
        'm-1.5': true,
        'bg-red-500':
          compareObjects(selectedOption[title], boss[title]) === 'incorrect',
        'bg-green-500':
          compareObjects(selectedOption[title], boss[title]) === 'correct',
        'bg-yellow-500':
          compareObjects(selectedOption[title], boss[title]) ===
          'partially-correct',
        'text-white': true,
        'text-xs': true,
        'border-accent': true,
        'border-2': true,
        'border-secondary': true,
      }">
        <template v-if="moreThanOne(selectedOption[title])">
          <div class="flex flex-col">
            <div v-for="(item, itemIndex) in getArray(selectedOption[title])" :key="itemIndex">
              <template v-if="index === 0">
                <img :src="selectedOption.image" :alt="selectedOption.name" />
              </template>
              <template v-else>
                <div>{{ getElementValue(item, itemIndex) }}</div>
              </template>
            </div>
          </div>
        </template>
        <template v-else>
          <template v-if="index === 0">
            <img :src="selectedOption.image" :alt="selectedOption.name" />
          </template>
          <template v-else>
            <div>{{ getElementValue(selectedOption[title]) }}</div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedOption",
  data() {
    return {
      elements: [
        "name",
        "weapon",
        "element",
        "type",
        "race",
        "gender",
        "movement",
        "game",
      ],
      boss: this.target,
    };
  },
  props: {
    selectedOption: {
      type: Object,
      required: true,
    },
    target: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getArray(element) {
      return element.split(";");
    },
    getElementValue(elementValue, i) {
      if (this.moreThanOne(elementValue)) {
        let array = elementValue.split(";");
        return array[i];
      } else {
        return elementValue;
      }
    },
    moreThanOne(element) {
      if (element.includes(";")) {
        return true;
      } else {
        return false;
      }
    },
    compareObjects(selectedValue, bossValue) {
      let match = 0;
      let cont = 0;
      if (this.moreThanOne(selectedValue)) {
        if (this.moreThanOne(bossValue)) {
          let bigger;
          let arraySelected = selectedValue.split(";");
          let arrayTarget = bossValue.split(";");
          arraySelected.length >= arrayTarget.length
            ? (bigger = arraySelected.length)
            : (bigger = arrayTarget.length);
          for (let i = 0; i < bigger; i++) {
            if (arraySelected[i] === arrayTarget[i]) {
              match++;
              cont++;
            } else {
              cont++;
            }
          }
        } else {
          let arraySelected = selectedValue.split(";");
          for (let i = 0; i < arraySelected.length; i++) {
            if (arraySelected[i] === bossValue) {
              match++;
              cont++;
            } else {
              cont++;
            }
          }
        }
      } else if (this.moreThanOne(bossValue)) {
        let arrayTarget = bossValue.split(";");
        for (let i = 0; i < arrayTarget.length; i++) {
          if (arrayTarget[i] === selectedValue) {
            match++;
            cont++;
          } else {
            cont++;
          }
        }
      } else if (selectedValue === bossValue) {
        match++;
        cont++;
      } else {
        cont++;
      }

      if (match >= 1 && match == cont) {
        return "correct";
      } else if (match >= 1 && match != cont) {
        return "partially-correct";
      } else {
        return "incorrect";
      }
    },
  },
};
</script>
