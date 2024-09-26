<script>
import ProfileTabs from '../components/Profile/ProfileTabs.vue';
import UserCard from '../components/User/UserCard.vue';
import UserDataService from '../services/UserDataService';

export default {
  name: 'Profile',
  components: {
    ProfileTabs,
    UserCard
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getUser(id) {
      UserDataService.get(id)
        .then(res => {
          this.user = res.data;
        })
        .catch((e) => console.log(e));
    },
    logged() {
      if (localStorage.getItem('userID') !== null) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    userID() {
      return localStorage.getItem('userID');
    },
    id() {
      return this.$route.params.id;
    }
  },
  mounted() {
    if (this.logged()) {
      this.getUser(this.id);
    }
    else {
      window.location.replace("/");
    }
  },
}
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col my-auto border-2 rounded-lg shadow-md border-accent bg-primary p-9">
      <a href="/">&lt; <span class="hover:underline">Back</span></a>
      <h1
        class="pb-2 text-xl font-bold leading-tight tracking-tight text-center underline text-accent md:text-2xl dark:text-white">
        Profile
      </h1>
      <div class="flex flex-col gap-3">
        <UserCard :user="user" owner />
        <div v-if="this.id == this.userID" class="flex justify-end">
          <router-link to="/settings" class="p-2 text-sm border rounded-md border-accent">
            Edit profile
          </router-link>
        </div>
      </div>
      <ProfileTabs :user="user" />
    </div>
  </div>
</template>
