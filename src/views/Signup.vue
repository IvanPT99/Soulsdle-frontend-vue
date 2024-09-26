<script>
import UserDataService from '../services/UserDataService';

export default {
  name: 'Signup',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
      confirmPassword: '',
      users: null,
    }
  },
  methods: {
    signup() {
      let userObj = JSON.parse(JSON.stringify(this.user));
      if (this.user.name.length && this.user.email.length && this.user.password.length && this.confirmPassword.length) {
        if (this.user.password != this.confirmPassword) {
          alert('The passwords are different')
          // } else if () {
        } else {
          if (userObj) {
            UserDataService.create(userObj)
              .then(res => {
                if (res.status == 201) {
                  this.storeUser(res.data.id)
                  window.location.replace("/");
                } else {
                  alert('User was not created');
                }
              })
              .catch(e => {
                console.log(e);
                alert("couldn't create user");
              });
          }
          //   }
        }
      }
    },
    storeUser(id) {
      localStorage.setItem('userID', JSON.stringify(id));

      this.user.name = '';
      this.user.email = '';
      this.user.password = '';
      this.confirmPassword = '';
    },
  }
}
</script>

<template>
  <div class="flex items-center">
    <div
      class="w-full rounded-lg shadow bg-primary dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-accent md:text-2xl dark:text-white">
          Create your account
        </h1>
        <form class="space-y-4 md:space-y-6" method="post">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-accent dark:text-white">
                Your username
              </label>
              <input type="text" v-model="user.name" name="username" id="username"
                class="bg-gray-50 border border-gray-300 text-accent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username" />
            </div>
            <div class="col-span-1">
              <label for="email" class="block mb-2 text-sm font-medium text-accent dark:text-white">
                Your email
              </label>
              <input type="email" v-model="user.email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-accent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com" />
            </div>
            <div class="col-span-1">
              <label for="password" class="block mb-2 text-sm font-medium text-accent dark:text-white">
                Password
              </label>
              <input type="password" v-model="user.password" name="password" id="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-accent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="col-span-1">
              <label for="confirmPassword" class="block mb-2 text-sm font-medium text-accent dark:text-white">
                Repeat password
              </label>
              <input type="password" v-model="confirmPassword" name="confirmPassword" id="confirmPassword"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-accent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <button type="submit" @click.prevent="signup"
            class="w-full text-white bg-accent hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Sign in
          </button>
          <p class="text-sm font-light text-secondary dark:text-gray-400">
            Do you have an account?
            <router-link to="/login"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
