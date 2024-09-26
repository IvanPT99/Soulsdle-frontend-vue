<script>
import UserDataService from '../../services/UserDataService';
import userIcon from '../../assets/user-icon.png'

export default {
  name: "EditTab",
  data() {
    return {
      user: {},
      userIcon: userIcon
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
    readImage(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result;
        console.log(base64)
        this.user.image = base64;
      };
      reader.onerror = error => {
        console.log("Error: ", error);
      };
    }
  },
  mounted() {
    this.getUser(localStorage.getItem('userID'));
  },
}
</script>

<template>
  <form action="/">
    <div class="flex flex-col w-full gap-6 jusify-center">
      <div class="flex justify-center w-full">
        <div class="flex flex-col w-full gap-4">
          <div class='flex flex-col items-center justify-end gap-2'>
            <img :src="user?.image || userIcon" alt='Profile image' class='flex w-24 rounded-full' />
            <input @change="readImage" type="file" name="image" id="image">
          </div>
          <div class="flex flex-col w-full p-2 border rounded shadow border-accent">
            <label htmlFor="name" class="font-bold">Username</label>
            <input v-model="user.name" class="p-1 px-2 rounded bg-white/80" type="text" name="name" id="name" required />
          </div>
          <div class="flex flex-col w-full p-2 border rounded shadow border-accent">
            <label htmlFor="email" class="font-bold">Email</label>
            <input v-model="user.email" class="p-1 px-2 rounded bg-white/80" type="email" name="email" id="email"
              required />
          </div>
          <div class="flex flex-col w-full p-2 border rounded shadow border-accent">
            <label htmlFor="password" class="font-bold">Password</label>
            <input v-model="user.password" class="p-1 px-2 rounded bg-white/80" type="password" name="password"
              id="password" required />
          </div>
        </div>
      </div>
      <div class="flex text-lg">
        <button type="submit" @click.prevent="edit"
          class="w-full p-1 px-2 rounded text-primary bg-accent hover:bg-accent/90">
          Save changes
        </button>
      </div>
    </div>
  </form>
</template>