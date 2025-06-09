<script setup lang="ts">
import { useConfigStore } from '@/stores/configStore';
import { Back, Close } from '@element-plus/icons-vue';
import type { DrawerProps, ElDrawer } from 'element-plus';
import { storeToRefs } from 'pinia';
import { ref, type VNode } from 'vue';

const configStore = useConfigStore();
const { isMobile } = storeToRefs(configStore);

const elDrawerRef = ref<InstanceType<typeof ElDrawer>>();
const model = defineModel<boolean>();

defineProps<{
  modelValue: boolean;
  title: string;
}>();

defineSlots<{
  default: () => VNode;
  footer: () => VNode;
}>();

const handleCloseDrawer = () => {
  elDrawerRef.value?.handleClose();
};
</script>

<template>
  <ElDrawer
    ref="elDrawerRef"
    v-model="model"
    :direction="isMobile ? 'btt' : 'rtl'"
    :class="['!h-[100%]', !isMobile && '!w-[600px]']"
    :show-close="false"
  >
    <template #header>
      <div class="flex justify-center relative md:justify-between">
        <div class="absolute left-0 md:hidden" @click="handleCloseDrawer">
          <ElIcon color="black" :size="24"><Back /></ElIcon>
        </div>
        <div class="text-black font-bold">{{ title }}</div>
        <div class="hidden md:block" @click="handleCloseDrawer">
          <ElIcon color="black" :size="24"><Close /></ElIcon>
        </div>
      </div>
    </template>
    <slot name="default"></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </ElDrawer>
</template>

<style scoped lang="scss"></style>
