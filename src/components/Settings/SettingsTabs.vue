<script>
import UsersList from './UsersList.vue';
import EditTab from './EditTab.vue';
import AddFriendTab from './AddFriendTab.vue';
import UserDataService from '../../services/UserDataService';
import FriendDataService from '../../services/FriendDataService';

export default {
  name: "SettingsTabs",
  components: {
    UsersList,
    EditTab,
    AddFriendTab
  },
  // props: {
  //   user: {
  //     type: Object,
  //     required: true
  //   }
  // },
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
    destroy() {
      let confirm = window.confirm('Are you sure you want to delete you account? You will lose all your scores and data.')
      if (confirm === true) {
        UserDataService.delete(localStorage.getItem('userID'))
          .then(res => {
            console.log(res.status)
            if (res.status == 204) {
              alert('Your account has been deleted');
              localStorage.removeItem('userID');
              window.location.replace("/")
            } else {
              alert('Your account could not be deleted')
            }
          })
          .catch((e) => console.log(e));
      }
    }
  },
}
</script>

<template>
  <div class="h-auto">
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-center underline text-accent md:text-2xl dark:text-white">
      Settings
    </h1>
    <ul class="flex items-center my-3 -mb-px font-medium text-center text-md">
      <li class="flex justify-center w-44">
        <button class="inline-block p-4 border-b-2 text-accent" @click="toggleTabs(1)"
          :class="{ 'border-transparent hover:border-b-accent': openTab !== 1, 'border-b-accent': openTab === 1 }">
          Edit profile
        </button>
      </li>
      <li class="flex justify-center w-44">
        <button class="inline-block p-4 border-b-2 text-accent" @click="toggleTabs(2)"
          :class="{ 'border-transparent hover:border-b-accent': openTab !== 2, 'border-b-accent': openTab === 2 }">
          Add friends
        </button>
      </li>
      <li class="flex justify-center w-44">
        <button class="inline-block p-4 border-b-2 text-accent" @click="toggleTabs(3)"
          :class="{ 'border-transparent hover:border-b-accent': openTab !== 3, 'border-b-accent': openTab === 3 }">
          Security
        </button>
      </li>
    </ul>
    <div class="p-4 m-4 border rounded-lg border-accent dark:bg-gray-800">
      <div :class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
        <EditTab />
      </div>
      <div :class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
        <AddFriendTab />
      </div>
      <div :class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
        <button @click="destroy"
          class="flex justify-center p-2 px-6 m-auto text-white bg-red-500 rounded cursor-pointer hover:bg-red-400">Delete
          account</button>
      </div>
    </div>
  </div>
</template>