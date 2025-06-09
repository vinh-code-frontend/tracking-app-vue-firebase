<script lang="ts" setup>
import { signInWithGoogle } from '@/services/authService';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();

const disabled = ref(false);

const handleLogin = async () => {
  disabled.value = true;
  const result = await signInWithGoogle();
  if (result) {
    const redirectPath = (route.query.redirect as string) || '/';
    await router.push(redirectPath);
  }
  disabled.value = false;
};

onMounted(() => {
  console.log('mounted');
});

const ggImageLink = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png';
</script>
<template>
  <div class="about">
    <h1>Login</h1>
    <ElButton :disabled="disabled" class="btn" round @click="handleLogin">
      <span> Đăng nhập bằng Google </span>
      <ElImage :src="ggImageLink" fit="cover" class="w-[18px] ms-2" />
    </ElButton>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
