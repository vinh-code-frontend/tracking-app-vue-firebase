<script setup lang="ts">
import ElementDialog from '@/shared/components/ElementDialog.vue';

const model = defineModel<boolean>();
defineProps<{
  modelValue: boolean;
}>();
</script>

<template>
  <ElementDialog v-model="model!" title="Add New Expense">
    <div>add</div>
    <template #footer>
      <div class="flex md:justify-end">
        <ElButton round class="flex-1 md:flex-[unset] md:w-32" type="primary">Add</ElButton>
      </div>
    </template>
  </ElementDialog>
</template>

<style scoped lang="scss"></style>
