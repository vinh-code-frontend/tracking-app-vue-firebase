<script setup lang="ts">
import ElementDialog from '@/shared/components/ElementDialog.vue';
import type { FormInstance } from 'element-plus';
import { ref, watch } from 'vue';

const drawerVisible = defineModel<boolean>();

const formRef = ref<FormInstance>();

const model = ref({
  paymentDate: ''
});

const handleUpdate = (e) => {
  console.log(e);
  model.value.paymentDate = e;
};

// watch(
//   () => model.value.paymentDate,
//   (newV) => {
//     console.log(newV);
//   }
// );
</script>

<template>
  <ElementDialog v-model="drawerVisible!" title="Add New Expense">
    <ElForm ref="formRef" :model="model" label-position="top" require-asterisk-position="right">
      <ElFormItem prop="title" label="Title">
        <ElInput />
      </ElFormItem>
      <ElFormItem prop="amount" label="Amount">
        <ElInput />
      </ElFormItem>
      <ElFormItem prop="paymentDate" label="Payment Date">
        <ElDatePicker :model-value="model.paymentDate" type="datetime" value-format="YYYY/MM/DD" @update:model-value="handleUpdate" />
      </ElFormItem>
      <ElFormItem prop="tagIds" label="Tags">
        <ElSelect />
      </ElFormItem>
      <ElFormItem prop="address" label="Address">
        <ElInput />
      </ElFormItem>
      <ElFormItem prop="description" label="Description">
        <ElInput type="textarea" />
      </ElFormItem>
    </ElForm>
    <template #footer>
      <div class="flex md:justify-end">
        <ElButton round class="flex-1 md:flex-[unset] md:w-32" type="primary">Add</ElButton>
      </div>
    </template>
  </ElementDialog>
</template>

<style scoped lang="scss"></style>
