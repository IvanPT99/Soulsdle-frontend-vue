<script lang="ts">
export default {
  name: 'SocialButtonLink',
  props: {
    page: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false
    },
    alt: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      imageRoute: `/src/assets/${this.image}`,
    }
  }
}
</script>
<template>
  <button
    class="flex items-center justify-center col-span-1 px-3 py-2 text-xl border-2 border-solid rounded-2xl bg-primary border-accent text-accent">
    <a :href="`https://${page}.com/soulsdle`">
      <img :src="imageRoute" :alt="alt" class="w-[30px] h-[30px]">
    </a>
  </button>
</template>
