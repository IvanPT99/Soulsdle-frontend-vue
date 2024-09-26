<script lang="ts">
import ButtonLink from "./Home/ButtonLink.vue";
import SocialButtonLink from "./SocialButtonLink.vue";

export default {
  name: "IconsBar",
  components: {
    ButtonLink,
    SocialButtonLink
  },
};
</script>

<template>
  <div class="grid grid-cols-3 gap-2 p-3 text-center">
    <SocialButtonLink page="twitter" image="twitter-logo.svg" alt="Twitter logo" />
    <ButtonLink path="about-us" image="info.png" alt="Info page" />
    <SocialButtonLink page="paypal" image="paypal-logo.svg" alt="Paypal logo" />
  </div>
</template>