<script setup lang="ts">
import HomeTopBar from './components/HomeTopBar.vue';
import HomeBottomBar from './components/HomeBottomBar.vue';
import { getElColor } from '@/shared/utils/color';
import { homeBottomBarHeight, homeScrollbarHeight } from '@/shared/constants';
// import HomeAddExpense from './components/HomeAddExpense.vue';
import { ref } from 'vue';
import AddExpenseDrawer from '@/features/ExpenseForm/AddExpenseDrawer.vue';

const drawerVisible = ref(true);
</script>

<template>
  <div class="p-4 h-[100dvh] relative" :class="`pb-[${homeBottomBarHeight}] `" :style="{ backgroundColor: getElColor('primary', { ratio: 9 }) }">
    <HomeTopBar />
    <div>
      <ElScrollbar :height="homeScrollbarHeight">
        <RouterView />
      </ElScrollbar>
    </div>

    <HomeBottomBar @open-drawer="drawerVisible = true" />
    <!-- <HomeAddExpense v-model="drawerVisible" /> -->
    <AddExpenseDrawer v-model="drawerVisible" />
  </div>
</template>

<style scoped lang="scss"></style>
