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
      user: {},
      friends: [],
    }
  },
  methods: {
    getFriends(id) {
      FriendDataService.getAll(id)
        .then(res => {
          console.log
          this.friends = res.data;
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    searchFriends() {
      if (this.search) {
        return this.friends.filter(friend => {
          return friend.name.toLowerCase().includes(this.search.toLowerCase())
        })
      } else {
        return this.friends;
      }
    }
  },
  mounted() {
    this.getFriends(this.id);
  }
}
</script>

<template>
  {{ user.id }}
  <div class="flex flex-col h-[425px]">
    <div class="pb-4">
      Search friends: <input type="text" v-model="search" class="bg-transparent border rounded-sm border-accent"
        name="searchFriend" id="searchFriend">
    </div>
    <div class="h-full my-2 overflow-y-auto">
      <div v-if="searchFriends.length > 0" class="flex flex-col h-full">
        <UserCard v-for="friend in searchFriends" class="my-1" :user="friend" friend />
      </div>
      <div v-else class="text-center">
        You doesn't have any friend yet.
      </div>
    </div>
  </div>
</template>