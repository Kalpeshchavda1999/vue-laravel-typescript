import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useInterFaceStore = defineStore('interFace', () => {
    const isLoading = ref(false);

    return { isLoading }
})
