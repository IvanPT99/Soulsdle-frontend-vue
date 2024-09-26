<script>
import RankingTabs from '../components/Rankings/RankingTabs.vue';
import UserDataService from '../services/UserDataService';

export default {
  components: {
    RankingTabs,
  },
  data() {
    return {
      users: [] // as Users[]
    };
  },
  methods: {
    getUsers() {
      UserDataService.getAll()
        .then(res => {
          this.users = res.data;
        })
        .catch((e) => console.log(e));
    }
  },
  mounted() {
    this.getUsers();
  },
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="h-auto p-6 border-2 rounded-lg bg-primary border-accent dark:border md:mt-0 sm:max-w-xl dark:bg-gray-800 dark:border-gray-700">
      <div class="gap-3 space-y-3 sm:pb-0 md:space-y-3">
        <a href="/">&lt; <span class="hover:underline">Back</span></a>
        <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-accent md:text-2xl dark:text-white">
          <u>Rankings</u>
        </h1>
        <RankingTabs />
      </div>
    </div>
  </div>
</template>