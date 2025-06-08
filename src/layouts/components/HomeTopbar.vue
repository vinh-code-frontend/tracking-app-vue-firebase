<script setup lang="ts">
import { logout } from '@/services/authService';
import { useAuthStore } from '@/stores/authStore';

const { loginUser } = useAuthStore();
</script>

<template>
  <div class="flex gap-2 justify-between">
    <ElButton v-if="loginUser" @click="logout"> Đăng xuất </ElButton>
    <p v-if="loginUser">Chào, {{ loginUser.displayName }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
