<script setup lang="ts">
import { logout } from '@/services/authService';
import { useAuthStore } from '@/stores/authStore';

const { loginUser } = useAuthStore();
</script>

<template>
  <div>
    <div class="flex gap-2 justify-between">
      <button v-if="loginUser" class="btn" @click="logout">Đăng xuất</button>
      <p v-if="loginUser">Chào, {{ loginUser.displayName }}</p>
    </div>
    <select data-choose-theme>
      <option value="cupcake">Default</option>
      <option value="dark">Dark</option>
      <option value="pink">Pink</option>
    </select>
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
