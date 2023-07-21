<template>
    <div>

        <slot v-if="isMobile"></slot>
        <slot v-if="!isMobile" name="email"></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    isMobile: Boolean,
});
</script>
