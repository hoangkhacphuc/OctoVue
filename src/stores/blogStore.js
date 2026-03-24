import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blog', {
    state: () => ({
        posts: [],
        pagination: { current_page: 1, last_page: 1, total: 0 },
        searchQuery: '',
        loading: false,
        error: '',
        hasLoadedOnce: false
    }),
    actions: {
        async fetchPosts(page = 1) {
            this.loading = true;
            this.error = '';
            
            try {
                let url = `/api/v1/blog?page=${page}`;
                if (this.searchQuery) {
                    url += `&search=${encodeURIComponent(this.searchQuery)}`;
                }
                
                const response = await fetch(url);
                if (!response.ok) throw new Error('API failed: ' + response.statusText);
                
                const data = await response.json();
                
                // Map native backend pagination dynamically avoiding view-layer processing
                this.posts = data.data.map(record => ({
                    title: record.title,
                    excerpt: record.excerpt,
                    slug: record.slug,
                    image: (record.featured_image && record.featured_image.length > 0) 
                            ? record.featured_image[0].path 
                            : null
                }));
                
                this.pagination = {
                    current_page: data.current_page,
                    last_page: data.last_page,
                    total: data.total
                };
                
                this.hasLoadedOnce = true;
            } catch(err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
        
        setSearchQuery(query) {
            this.searchQuery = query;
        }
    }
});
