<template>
  <Disclosure as="nav" class="sticky top-0 w-full bg-accent" v-slot="{ open }">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex items-center justify-center flex-1 align-middle sm:items-stretch sm:justify-start">
          <div class="flex items-center flex-shrink-0 max-w-[60px]">
            <img class="block h-12 max-w-full lg:hidden" src="../assets/dle.png" alt="Soulsdle" />
            <img class="hidden h-12 max-w-full lg:block" src="../assets/dle.png" alt="Soulsdle" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium',
              ]" :aria-current="item.current ? 'page' : undefined">{{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Profile dropdown -->
          <Menu as="div" v-if="logged()" class="relative ml-3">
            <div>
              <MenuButton
                class="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" :src="user?.image ? user?.image : userIcon" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <MenuItems
                class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                <a :href="'/profile/' + id" :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]
                  ">Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <a href="/settings" :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]
                  ">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <a href="#" :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]
                  " @click="logout">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
          <div v-else>
            <router-link to="/login"
              class="px-3 py-2 m-2 text-lg border-solid rounded-md bg-primary border-accent text-accent">
              Log In
            </router-link>
            <router-link to="/signup"
              class="px-3 py-2 border border-solid rounded-md text-md text-primary border-primary">
              Sign Up
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton v-for=" item  in  navigation " :key="item.name" as="a" :href="item.href" :class="[
          item.current
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'block rounded-md px-3 py-2 text-base font-medium',
        ]
          " :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { onMounted } from 'vue';
import UserDataService from '../services/UserDataService';
import userIcon from '../assets/user-icon.png';

const user = {};

onMounted(() => {
  if (localStorage.getItem('userID') !== null) {
    UserDataService.get(localStorage.getItem('userID'))
      .then(res => {
        user = res.data;
        console.log(res.data)
      })
      .catch((e) => console.log(e));
  }

});

let id = localStorage.getItem('userID');

import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

function logged() {
  if (localStorage.getItem('userID')) {
    return true;
  } else {
    return false;
  }
};

function logout() {
  localStorage.removeItem('userID');
  window.location.replace("/")
};

const navigation = [
  { name: "Play now!!", href: "/", current: true },
  { name: "Rankings", href: "/rankings", current: false },
  { name: "About us", href: "/about-us", current: false },
  { name: "GET PREMIUM", href: "/premium", current: false },
];


</script>
