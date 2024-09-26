<script>
import UserDataService from '../../services/UserDataService';
import FriendDataService from '../../services/FriendDataService';
import Login from '../../views/Login.vue';

export default {
  name: "ProfileTabs",
  data() {
    return {
      users: [],
      friends: [],
      usersFilter: [],
      friendsFilter: [],
      openTab: 1
    }
  },
  components: {
    Login
  },
  methods: {
    getUsers() {
      UserDataService.getAll()
        .then(res => {
          this.users = res.data;
          this.usersFilter = this.users.sort(function (a, b) {
            return b.max_score - a.max_score;
          });
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
    getFriends() {
      FriendDataService.getAll(localStorage.getItem('userID'))
        .then(res => {
          this.friends = res.data;
          this.friendsFilter = this.friends.sort(function (a, b) {
            return b.max_score - a.max_score;
          });
        })
    },
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    }
  },
  mounted() {
    this.getUsers();
    if (this.logged()) {
      this.getFriends();
    }
  }
}
</script>

<template>
  <div class="h-auto border-accent dark:border-accent">
    <ul class="flex flex-wrap justify-center -mb-px font-medium text-center text-md">
      <li class="mr-2">
        <button class="inline-block p-4 border-b-2 rounded-t-lg text-accent" @click="toggleTabs(1)"
          :class="{ 'border-transparent hover:border-b-accent': openTab !== 1, 'border-b-accent': openTab === 1 }">
          Global
        </button>
      </li>
      <li class="mr-2">
        <button v-if="logged()" class="inline-block p-4 border-b-2 rounded-t-lg text-accent" @click="toggleTabs(2)"
          :class="{ 'border-transparent hover:border-b-accent': openTab !== 2, 'border-b-accent': openTab === 2 }">
          Friends
        </button>
        <button v-else class="inline-block p-4 border-b-2 rounded-t-lg text-accent">
          <a href="login  ">Friends</a>
        </button>
      </li>
    </ul>
    <div class="p-4 m-4 border rounded-lg border-accent dark:bg-gray-800">
      <div :class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
        <div class="flex flex-col">
          <div class="grid grid-cols-4 text-center border-b border-accent">
            <div>Rank</div>
            <div>User</div>
            <div>Puntuation</div>
            <div>Profile</div>
          </div>
          <div v-for="(user, i) in usersFilter">
            <div class="grid grid-cols-4 py-1 text-center" v-if="user.max_score > 0">
              <div class="px-1">
                #{{ i + 1 }}
              </div>
              <div class="px-1">
                {{ user.name }}
              </div>
              <div class="px-1">
                {{ user.max_score }}
              </div>
              <div class="px-1">
                <a class="hover:underline" :href="'/profile/' + user.id">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="logged()" :class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
        <div class="flex flex-col">
          <div class="grid grid-cols-4 text-center border-b border-accent">
            <div>Rank</div>
            <div>User</div>
            <div>Puntuation</div>
            <div>Profile</div>
          </div>
          <div v-for="(friend, i) in friendsFilter">
            <div class="grid grid-cols-4 py-1 text-center" v-if="friend.max_score > 0">
              <div class="px-1">
                #{{ i + 1 }}
              </div>
              <div class="px-1">
                {{ friend.name }}
              </div>
              <div class="px-1">
                {{ friend.max_score }}
              </div>
              <div class="px-1">
                <a class="hover:underline" :href="'/profile/' + friend.id">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>