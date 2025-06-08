<script setup lang="ts">
import { logout } from '@/services/authService';
import { useAuthStore } from '@/stores/authStore';
import HomeTopbar from './components/HomeTopbar.vue';

const { loginUser } = useAuthStore();
</script>

<template>
  <div>
    <HomeTopbar />
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
