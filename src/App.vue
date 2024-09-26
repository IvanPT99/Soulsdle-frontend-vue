<script lang="ts">
import IconsBar from "./components/IconsBar.vue";
import Navbar from "./components/Navbar.vue";
import LateralAds from "./components/LateralAds.vue";

export default {
  components: {
    Navbar,
    IconsBar,
    LateralAds,
  },
};
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <Navbar />
    <!--<LateralAds/>-->
    <div class="flex-grow bg-cover bg-fixed bg-center bg-[url('./assets/fondo.png')]">
      <div class="flex flex-col items-center">
        <div class="flex flex-col max-w-[400px]">
          <img id="logo" class="max-w-full my-10 bg-transparent" src="./assets/logo.png" alt="Soulsdle" />
        </div>
        <RouterView />
        <IconsBar />
      </div>
    </div>
  </div>
</template>