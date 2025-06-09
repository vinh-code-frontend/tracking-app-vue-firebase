<script setup lang="ts">
import { getElColor } from '@/shared/utils/color';
import { useAuthStore } from '@/stores/authStore';
import { Setting, User } from '@element-plus/icons-vue';

const { loginUser } = useAuthStore();

console.log(loginUser);
</script>

<template>
  <div class="flex gap-2 justify-between pb-5">
    <div v-if="loginUser" class="flex gap-3 items-center">
      <ElImage v-if="loginUser.photoURL" :src="loginUser.photoURL" class="rounded-lg w-12">
        <template #error>
          <div class="bg-white aspect-square flex items-center justify-center">
            <ElIcon size="20" :color="getElColor('primary')"><User /></ElIcon>
          </div>
        </template>
      </ElImage>
      <div>
        <div>
          {{ loginUser.displayName }}
        </div>
        <div v-if="loginUser.email" class="text-[#909399] italic text-sm">@{{ loginUser.email }}</div>
      </div>
    </div>
    <ElButton class="w-12 h-12! !rounded-lg">
      <ElIcon size="20"><Setting /></ElIcon>
    </ElButton>
  </div>
</template>

<style lang="scss" scoped></style>
