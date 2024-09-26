<script lang="ts">
export default {
  name: 'ButtonLink',
  props: {
    image: {
      type: String,
      required: false
    },
    path: {
      type: String,
      required: false,
    },
    alt: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      pathName: `${this.path}`,
      imageRoute: `/src/assets/${this.image}`,
    }
  }
}
</script>
<template>
  <router-link :to="pathName" :class="[
    !image
      ? 'flex border-2 justify-center px-4 py-2 text-xl border-solid rounded-md bg-primary border-accent text-accent'
      : 'flex items-center justify-center col-span-1 px-3 py-2 text-xl border-solid rounded-2xl bg-primary border-accent border-2 text-accent'
  ]">
    <slot v-if="!image"></slot>
    <img v-else :src="imageRoute" :alt="alt" class="w-[30px] h-[30px]">
  </router-link>
</template>
