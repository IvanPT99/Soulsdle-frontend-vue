<script>
import UserDataService from '../services/UserDataService';
import AuthService from '../services/AuthService';

export default {
  name: 'Login',
  data() {
    return {
      user: null,
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.email.length && this.password.length) {
        AuthService.login({ email: this.email, password: this.password })
          .then(res => {
            this.confirmUser(res.data);
          })
      }
    },
    storeUser() {
      localStorage.setItem('userID', JSON.stringify(this.user.id));

      this.email = '';
      this.password = '';
    },
    confirmUser(user) {
      this.user = user;
      if (this.user) {
        this.storeUser();
        window.location.replace("/")
      } else {
        alert('User not found')
      }
    }
  }
}
</script>

<template>
  <div class="flex items-center">
    <div
      class="w-full rounded-lg shadow bg-primary dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-accent md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form class="space-y-4 md:space-y-6" action="/" method="post">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-accent dark:text-white">Your email</label>
            <input type="email" v-model="email" name="email" id="email"
              class="bg-gray-50 border border-gray-300 text-accent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com" />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-accent dark:text-white">Password</label>
            <input type="password" v-model="password" name="password" id="password" placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-accent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="text-secondary dark:text-gray-300">Remember me</label>
              </div>
            </div>
            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
              Forgot password?
            </a>
          </div>
          <button type="submit" @click.prevent="login"
            class="w-full text-white bg-accent hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            LogIn
          </button>
          <p class="text-sm font-light text-secondary dark:text-gray-400">
            Don't have an account yet?
            <router-link to="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
              SignUp
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>