<template>
    <div class="vue-container">
        <div class="title">/* Component: BlogView.vue pulling blogs with Pagination and Search */</div>
        
        <div class="search-bar">
            <input 
                type="text" 
                v-model="searchQuery" 
                @keyup.enter="performSearch"
                placeholder="Find posts by title..." 
                class="search-input"
            />
            <button class="btn-search" @click="performSearch">Search</button>
        </div>
        
        <div class="blog-grid" v-if="posts.length > 0" :class="{ 'loading': loading }">
            <BlogCard v-for="(post, idx) in posts" :key="idx" :post="post" />
        </div>
        
        <div class="pagination" v-if="pagination.last_page > 1">
            <div class="pagination-info">
                Page <span class="highlight">{{ pagination.current_page }}</span> / {{ pagination.last_page }} &mdash; Total {{ pagination.total }} Posts
            </div>
            
            <div class="pagination-controls">
                <button 
                    class="btn-page" 
                    :disabled="pagination.current_page === 1 || loading" 
                    @click="blogStore.fetchPosts(pagination.current_page - 1)"
                >Prev</button>
                
                <button 
                    v-for="page in nearbyPages" 
                    :key="page"
                    class="btn-page"
                    :class="{ 'active': page === pagination.current_page }"
                    :disabled="loading"
                    @click="blogStore.fetchPosts(page)"
                >{{ page }}</button>
                
                <button 
                    class="btn-page" 
                    :disabled="pagination.current_page === pagination.last_page || loading" 
                    @click="blogStore.fetchPosts(pagination.current_page + 1)"
                >Next</button>
            </div>
        </div>
        
        <div class="error-msg" v-if="error">{{ error }}</div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import BlogCard from '../components/BlogCard.vue'
import { useNotification } from "@kyvg/vue3-notification"
import { useBlogStore } from '../stores/blogStore'

const blogStore = useBlogStore()
const { posts, pagination, loading, error, searchQuery } = storeToRefs(blogStore)

const { notify } = useNotification();

const performSearch = async () => {
    await blogStore.fetchPosts(1);
    if (searchQuery.value) {
        notify({
            title: 'Search Results',
            text: pagination.value.total > 0 
                ? `Found ${pagination.value.total} post(s) for "${searchQuery.value}"`
                : `No posts found for "${searchQuery.value}"`,
            type: pagination.value.total > 0 ? 'success' : 'warn'
        });
    }
}

const nearbyPages = computed(() => {
    let pages = [];
    const current = pagination.value.current_page;
    const last = pagination.value.last_page;
    
    let start = Math.max(1, current - 2);
    let end = Math.min(last, current + 2);
    
    if (current <= 2 && last >= 5) {
        end = 5;
    } else if (current >= last - 1 && last >= 5) {
        start = last - 4;
    }
    
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    return pages;
});

onMounted(() => {
    if (!blogStore.hasLoadedOnce) {
        blogStore.fetchPosts(1);
    }
})
</script>
