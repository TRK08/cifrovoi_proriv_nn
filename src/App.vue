<template>
  <n-config-provider
      :theme="theme"
      :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
  >
    <n-notification-provider >
      <div class="app">
        <n-layout embedded has-sider style="height: 100%; padding: 30px;">
          <Sidebar />
          <n-layout class="app__content">
            <router-view />
          </n-layout>
        </n-layout>
      </div>
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from "@/components/UI/Sidebar.vue";
import {storeToRefs} from "pinia";
import {useGlobalStore} from "@/stores";

const {theme} = storeToRefs(useGlobalStore())

const lightThemeOverrides  = {
  Card: {
    color: 'rgb(250, 250, 252)',
  },
  Input: {
    color: 'rgb(250, 250, 252)'
  }
}

const darkThemeOverrides = {
  Layout: {
    color: 'rgb(24, 24, 28)',
  },
  Card: {
    color: 'rgb(16, 16, 20)'
  },
  Input: {
    color: 'rgb(16, 16, 20)'
  }
}



</script>


<style lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  &__content {
    padding: 15px 30px;
    border-radius: 1rem;
    margin-left: 30px;
  }
}
</style>
