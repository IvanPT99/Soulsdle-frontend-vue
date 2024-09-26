<script>
import UserDataService from '../services/UserDataService';
import SettingsTabs from '../components/Settings/SettingsTabs.vue';

export default {
  name: "UserCard",
  components: {
    SettingsTabs
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    getUser(id) {
      UserDataService.get(id)
        .then(res => {
          this.user = res.data;
        })
        .catch((e) => console.log(e));
    },
    edit() {
      UserDataService.update(localStorage.getItem('userID'), this.user)
        .then(res => {
          if (res.status == 200) {
            alert('User was updated');
          } else {
            alert('User could not be modified')
          }
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    id() {
      return localStorage.getItem('userID');
    }
  },
  mounted() {
    this.getUser(localStorage.getItem('userID'));
  },
}
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col h-auto my-auto border-2 rounded-lg shadow-md border-accent bg-primary p-9">
      <div>
        <a :href="'/profile/' + id">&lt; <span class="hover:underline">Back</span></a>
      </div>
      <SettingsTabs />
    </div>
  </div>
</template>
