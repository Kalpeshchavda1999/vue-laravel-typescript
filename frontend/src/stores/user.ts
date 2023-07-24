import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const isLoading = ref(false);

    return { isLoading }
})
