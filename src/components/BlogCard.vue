<template>
    <div class="blog-card">
        <div class="blog-image" v-if="post.image">
            <img v-lazy="post.image" :alt="post.title" />
        </div>
        <div class="blog-info">
            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-excerpt">{{ post.excerpt }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    post: {
        type: Object,
        required: true
    }
});
</script>
