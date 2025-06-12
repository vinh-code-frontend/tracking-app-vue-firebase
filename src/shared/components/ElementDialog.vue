<script setup lang="ts">
import { useConfigStore } from '@/stores/configStore';
import { Back, Close } from '@element-plus/icons-vue';
import type { ElDrawer } from 'element-plus';
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

const slots = defineSlots<{
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
    :class="['element-drawer !h-[100%]', !isMobile && '!w-[600px]']"
    :show-close="false"
  >
    <template #header>
      <div class="flex justify-center relative md:justify-between">
        <div class="absolute left-0 md:hidden">
          <ElIcon color="black" class="element-drawer-header-close-btn cursor-pointer" :size="24" @click="handleCloseDrawer"><Back /></ElIcon>
        </div>
        <div class="text-black font-bold">{{ title }}</div>
        <div class="hidden md:block">
          <ElIcon color="black" class="element-drawer-header-close-btn cursor-pointer" :size="24" @click="handleCloseDrawer"><Close /></ElIcon>
        </div>
      </div>
    </template>
    <ElScrollbar v-if="slots.default">
      <slot name="default"></slot>
    </ElScrollbar>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </ElDrawer>
</template>

<style>
.element-drawer-header-close-btn:hover {
  --color: var(--el-color-primary) !important;
}

.element-drawer .el-drawer__header {
  margin-bottom: 20px;
}
</style>
