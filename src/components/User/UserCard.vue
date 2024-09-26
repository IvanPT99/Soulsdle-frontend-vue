<script>
import FriendDataService from '../../services/FriendDataService';
import UserDataService from '../../services/UserDataService';
import userIcon from '../../assets/user-icon.png';

export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true
    },
    url: {
      type: String,
      required: false
    },
    size: {
      type: String,
      required: false
    },
    owner: Boolean,
    friend: Boolean,
  },
  data() {
    return {
      currentUser: [],
      userIcon: userIcon
    }
  },
  methods: {
    addFriend() {
      FriendDataService.create(this.currentUser.id, this.user)
        .then(res => {
          console.log(res.status == 201)
          if (res.status) {
            alert('Ahora sigues a ' + this.user.name)
          } else {
            alert('Ya eres amigo de este usuario o no existe.')
          }
        })
        .catch((e) => console.log(e));
    },
    getUser() {
      UserDataService.get(localStorage.getItem('userID'))
        .then(res => {
          this.currentUser = res.data;
        })
        .catch((e) => console.log(e));
    }
  },
  mounted() {
    this.getUser();
  }
}
</script>

<template>
  <div class="flex items-center justify-between gap-2 pr-4 rounded-md shadow-md">
    <div class="flex items-center">
      <img class="w-20 rounded-xl" :src="user?.image ? user?.image : userIcon" alt="Profile image">
      <p class="px-3 text-3xl font-bold text-accent">
        {{ user.name }}
      </p>
    </div>
    <div v-if="!owner" class="flex gap-3">
      <button v-if="!friend" @click="addFriend">Add</button>
      <a :href="'/profile/' + user.id">View</a>
    </div>
  </div>
</template>