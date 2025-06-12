<script setup lang="ts">
import ElementDialog from '@/shared/components/ElementDialog.vue';
import { markRaw, ref } from 'vue';
import ExpenseForm from './components/ExpenseForm.vue';
import AdditionalForm from './components/AdditionalForm.vue';
import BuyerForm from './components/BuyerForm.vue';
import { Collection, Money, User } from '@element-plus/icons-vue';

const drawerVisible = defineModel<boolean>();

const listForms = [
  {
    name: 'Expense',
    label: 'Expense',
    icon: markRaw(Money),
    form: markRaw(ExpenseForm)
  },
  {
    name: 'Buyer',
    label: 'Buyer',
    icon: markRaw(User),
    form: markRaw(BuyerForm)
  },
  {
    name: 'Additional',
    label: 'Additional',
    icon: markRaw(Collection),
    form: markRaw(AdditionalForm)
  }
];

const defaultForm = ref<(typeof listForms)[number]>(listForms[0]);

const handleSwitchForm = (menu: (typeof listForms)[number]) => {
  defaultForm.value = menu;
};
</script>

<template>
  <ElementDialog v-model="drawerVisible!" title="Add New Expense" class="add-expense-drawer">
    <div class="bg-white p-3 px-4 rounded-sm border" :class="`border-[var(--el-color-primary)]`">
      <KeepAlive>
        <component :is="defaultForm.form" class="w-full" />
      </KeepAlive>
    </div>

    <template #footer>
      <div class="flex justify-between gap-2 items-center">
        <ElButtonGroup size="default">
          <ElButton
            v-for="(menu, index) in listForms"
            :key="menu.name"
            plain
            class="h-10!"
            :type="defaultForm.name === menu.name ? 'primary' : 'default'"
            :round="index !== 1"
            @click="handleSwitchForm(menu)"
          >
            <div class="hidden xs:inline-block">{{ menu.label }}</div>
            <ElIcon class="m-0 xs:ms-1"><component :is="menu.icon" /></ElIcon>
          </ElButton>
        </ElButtonGroup>
        <ElButton type="primary">Add</ElButton>
      </div>
    </template>
  </ElementDialog>
</template>

<style>
.add-expense-drawer {
  background-color: var(--el-color-primary-light-9);
}

.add-expense-drawer .el-form-item {
  margin-bottom: 16px;
}

.add-expense-drawer .el-form-item__label {
  font-weight: 500;
}
</style>
