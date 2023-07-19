import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false);
    const canAccess = reactive({});
    const userRole = ref(null);
    const token = ref(null);

    function getUser() {

    }

    return { isAuthenticated, getUser, canAccess, userRole, token }
})
