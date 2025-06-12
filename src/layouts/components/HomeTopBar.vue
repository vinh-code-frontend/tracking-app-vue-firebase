<script setup lang="ts">
import { getLoginUser } from '@/services/authService';
import { getElColor } from '@/shared/utils/color';
import { useAuthStore } from '@/stores/authStore';
import { Refresh, Setting, User } from '@element-plus/icons-vue';
import { ref } from 'vue';

const { loginUser, setNeedFireStoreData } = useAuthStore();

const loading = ref(false);

const handleClick = async () => {
  if (loading.value) {
    return;
  }

  loading.value = true;
  setNeedFireStoreData(true);
  await getLoginUser();
  loading.value = false;
};
</script>

<template>
  <div class="flex gap-2 justify-between pb-5">
    <div v-if="loginUser" class="flex gap-3 items-center">
      <ElImage :src="''" class="rounded-lg w-12">
        <template #error>
          <div class="bg-white aspect-square flex items-center justify-center">
            <ElIcon size="20" :color="getElColor('primary')"><User /></ElIcon>
          </div>
        </template>
      </ElImage>
      <div>
        <div class="flex items-center gap-2">
          <div>{{ loginUser.displayName }}</div>
          <ElIcon class="cursor-pointer" :class="{ 'animate-spin': loading }" @click="handleClick"><Refresh /></ElIcon>
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
