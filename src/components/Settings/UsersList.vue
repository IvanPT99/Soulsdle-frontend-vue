<script>
import UserCard from '../User/UserCard.vue';
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
      users: []
    }
  },
  methods: {
    getFriends(id) {
      FriendDataService.getAll(id)
        .then(res => {
          this.users = res.data.filter(user => user.id != localStorage.getItem('userID'));
          console.log(this.users)
        })
        .catch((e) => console.log(e));
    },
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
  mounted() {
    this.getFriends(localStorage.getItem('userID'));
  }
}
</script>

<template>
  <div class="flex flex-col h-[425px]">
    <div class="pb-4">
      Search friends: <input type="text" v-model="search" class="bg-transparent border rounded-sm border-accent"
        name="searchFriend" id="searchFriend">
    </div>
    {{ search }}
    <div class="h-full my-2 overflow-y-auto">
      <div v-if="users" class="flex flex-col h-full">
        <UserCard v-for="user in searchUsers" class="my-1" :user="friend" />
      </div>
    </div>
  </div>
</template>