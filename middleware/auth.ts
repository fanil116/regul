export default defineNuxtRouteMiddleware((to, from) => {
    const token = useState<string | null>('token'); // Глобальное состояние
    const authCookie = useCookie<string | null>('auth_token'); // Куки

    if (!token.value && !authCookie.value) {
        return navigateTo('/login'); // Редирект, если токена нет
    }
});