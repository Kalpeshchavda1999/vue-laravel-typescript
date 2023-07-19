<template>
    <RouterView />
</template>

<style scoped>

</style>

<script setup lang="ts">
import { themeSetup } from '@/composables/themeSetup';

themeSetup('tests')

</script>
