<script>
import FriendsList from './FriendsList.vue';
import BossCard from '../Profile/BossCard.vue';
import FriendDataService from '../../services/FriendDataService';
import GameDataService from '../../services/GameDataService';
import PlayDataService from '../../services/PlayDataService'

export default {
  name: "ProfileTabs",
  components: { FriendsList, BossCard },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      plays: [],
      games: [],
      playsFilter: [],
      openTab: 1
    }
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
    getPlays(id) {
      PlayDataService.getAll(id)
        .then(res => {
          console.log(res.data)
          this.plays = res.data;
          this.playsFilter = this.plays.sort(function (a, b) {
            return Date(b.created_at) - Date(a.created_at);
          });
        })
    }
  },
  mounted() {
    this.getPlays(localStorage.getItem('userID'));
  }
}
</script>

<template>
  <div class="h-auto">
    <div class="border-accent dark:border-accent">
      <ul class="flex flex-wrap justify-center -mb-px font-medium text-center text-md">
        <li class="mr-2">
          <button class="inline-block p-4 border-b-2 rounded-t-lg text-accent" @click="toggleTabs(1)"
            :class="{ 'border-transparent hover:border-b-accent': openTab !== 1, 'border-b-accent': openTab === 1 }">
            Friends
          </button>
        </li>
        <li class="mr-2">
          <button class="inline-block p-4 border-b-2 rounded-t-lg text-accent" @click="toggleTabs(2)"
            :class="{ 'border-transparent hover:border-b-accent': openTab !== 2, 'border-b-accent': openTab === 2 }">
            Scores
          </button>
        </li>
      </ul>
      <div class="p-4 m-4 border rounded-lg border-accent dark:bg-gray-800">
        <div :class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
          <FriendsList />
        </div>
        <div :class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
          <div class="flex flex-col gap-5">
            <div>
              Boss Rush: {{ user.max_score }}
            </div>
            <div class="grid grid-cols-4 text-center border-b border-accent">
              <div>Daily</div>
            </div>
            <div v-for="play in playsFilter">
              <BossCard :id="play.boss_id" :win="play.win" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>