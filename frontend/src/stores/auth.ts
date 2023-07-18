import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false);

    function getUser() {

    }

    return { isAuthenticated, getUser }
})
