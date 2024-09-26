<script lang="ts">
import ButtonLink from "../components/Home/ButtonLink.vue";

export default {
  name: "Home",
  components: {
    ButtonLink
  },
  methods: {
    logged() {
      if (localStorage.getItem('userID')) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<template>
  <div class="flex flex-col gap-3 p-4">
    <ButtonLink :path="logged() ? '/daily' : '/login'">Daily Challenge</ButtonLink>
    <ButtonLink path="/boss-rush">Boss Rush</ButtonLink>
    <ButtonLink path="/premium">Premium Mode</ButtonLink>
  </div>
</template>
