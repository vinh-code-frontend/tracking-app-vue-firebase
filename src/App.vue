<script lang="ts" setup>
import { watch } from 'vue';
import { useViewport } from '@/shared/hooks/useViewport';
import { useConfigStore } from './stores/configStore';

const { width, height } = useViewport();
const { setViewport } = useConfigStore();

watch([width, height], ([nW, nH]) => {
  setViewport({ width: nW, height: nH });
});
</script>

<template>
  <ElConfigProvider size="large">
    <RouterView />
  </ElConfigProvider>
</template>
