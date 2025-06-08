<script setup lang="ts">
import { logout } from '@/services/authService';
import { useAuthStore } from '@/stores/authStore';
import { useI18n } from 'vue-i18n';

const { loginUser } = useAuthStore();
const { t } = useI18n();
</script>

<template>
  <div class="flex gap-2 justify-between">
    <ElButton v-if="loginUser" @click="logout"> {{ t('auth.logout_btn') }} </ElButton>
    <p v-if="loginUser">Chào, {{ loginUser.displayName }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
