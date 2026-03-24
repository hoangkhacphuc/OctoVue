<template>
    <div class="editor-tabs">
        <div class="tab active">{{ currentTabName }}</div>
    </div>
</template>

<script setup>
defineProps({
    currentTabName: {
        type: String,
        default: 'index.htm'
    }
});
</script>
