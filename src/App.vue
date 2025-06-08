<script lang="ts" setup>
import { onBeforeMount } from 'vue';

onBeforeMount(() => {});
</script>

<template>
  <ElConfigProvider size="large">
    <RouterView />
  </ElConfigProvider>
</template>
