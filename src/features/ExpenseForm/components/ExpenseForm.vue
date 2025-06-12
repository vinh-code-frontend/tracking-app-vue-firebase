<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue';
import type { FormInstance } from 'element-plus';
import { ref, watch } from 'vue';

const formRef = ref<FormInstance>();

const model = ref({
  paymentDate: '',
  paymentTime: ''
});

const isSubExpenseTableVisible = ref(false);

const handleUpdateDate = (e: string) => {
  console.log(e);
  model.value.paymentDate = e;
};

const handleUpdateTime = (e: string) => {
  console.log(e);
  model.value.paymentTime = e;
};

// watch(
//   () => model.value.paymentDate,
//   (newV) => {
//     console.log(newV);
//   }
// );
</script>

<template>
  <ElForm ref="formRef" :model="model" label-position="top" require-asterisk-position="right">
    <ElFormItem prop="title" label="Title" required>
      <ElInput />
    </ElFormItem>
    <ElFormItem prop="amount" label="Amount">
      <ElInput />
    </ElFormItem>
    <ElFormItem prop="tagIds" label="Tags">
      <ElSelect />
    </ElFormItem>
    <ElFormItem prop="paymentDate" label="Payment Date">
      <div class="flex gap-2">
        <ElDatePicker :model-value="model.paymentDate" class="w-[60%]!" value-format="DD/MM/YYYY" @update:model-value="handleUpdateDate" />
        <ElTimePicker :model-value="model.paymentTime" class="w-[40%]!" format="HH:mm" @update:model-value="handleUpdateTime" />
      </div>
    </ElFormItem>
    <ElFormItem prop="buyer" label="Buyers">
      <ElSelect />
    </ElFormItem>
    <ElFormItem prop="subExpense">
      <ElButton :icon="Plus" type="primary" class="mb-4" link @click="isSubExpenseTableVisible = true">Add Item</ElButton>
      <div v-if="isSubExpenseTableVisible">
        <div class="flex gap-1">
          <ElInput placeholder="Title" size="default" />
          <ElInput placeholder="Amount" size="default" />
        </div>
      </div>
    </ElFormItem>
  </ElForm>
</template>

<style scoped></style>
