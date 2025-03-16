<template>
    <form @submit.prevent="submit" class="d-flex flex-column w-50 ma-auto mt-4">
        <input  class="border-md" type="text" required v-model="username" placeholder="Login">
        <input class="border-md mt-2" type="password" required v-model="password" placeholder="Password">
      <button type="submit" class="border-md mt-2 bg-green">Login</button>
    </form>
</template>
<script setup>
    definePageMeta({
        layout: 'custom',
    });
    import { ref } from 'vue';

    const username = ref<string>('');
    const password = ref<string>('');
    const correctUsername = 'admin';
    const correctPassword = 'secret';
    const token = useState('token', () => null);
    const authCookie = useCookie('auth_token');
    const errorMessage = ref<string>('');
    const simulateJwtToken = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === correctUsername && password === correctPassword) {
                resolve('fake-jwt-token'); // Возвращаем токен в resolve
            } else {
                reject(new Error('Не правильный логин или пароль'));
            }
        }, 500);
    });
    };
    const submit = async () => {
        try {
            const fakeToken = await simulateJwtToken(username.value, password.value);
            token.value = fakeToken;
            authCookie.value = fakeToken;
        } catch (error) {
            errorMessage.value = error.message;
            alert(errorMessage.value);
            clearInput()
        }
    };
    const clearInput = () => {
        username.value = "";
        password.value = "";
    }
</script>
<style>

</style>
  