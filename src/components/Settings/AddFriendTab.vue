<script>
import UserCard from '../User/UserCard.vue';
import UserDataService from '../../services/UserDataService';
import FriendDataService from '../../services/FriendDataService';

export default {
  name: "FriendsList",
  components: { UserCard },
  props: {
    url: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      search: '',
      users: [],
      friends: []
    }
  },
  methods: {
    getUsers() {
      UserDataService.getAll()
        .then(res => {
          console.log(res.data)
          this.users = res.data.filter(user => user.id != localStorage.getItem('userID'));
        })
        .catch((e) => console.log(e));
    },
    getFriends() {
      FriendDataService.getAll(localStorage.getItem('userID'))
        .then(res => {
          console.log(res.data)
          this.friends = res.data;
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.getUsers();
    this.getFriends();
  },
  computed: {
    searchUsers() {
      if (this.search) {
        return this.users.filter(user => {
          return user.name.toLowerCase().includes(this.search.toLowerCase())
        })
      } else {
        return this.users;
      }
    }
  },
}
</script>

<template>
  <div class="flex flex-col h-[425px]">
    <div class="pb-4">
      <input type="text" v-model="search"
        class="w-full px-2 bg-transparent border rounded-sm placeholder-accent border-accent" placeholder="Search user">
    </div>
    <div class="h-full my-2 overflow-y-auto">
      <div v-if="searchUsers.length > 0" class="flex flex-col h-full">
        <div v-for="user in searchUsers">
          <div v-if="friends.length > 0"></div>
          <UserCard v-if="!friends.filter(friend => user.id === friend.id).length > 0" class="my-1" :user="user" />
        </div>
      </div>
      <div v-else class="text-center">
        The user you are searching doesn't exist.
      </div>
    </div>

  </div>
</template>