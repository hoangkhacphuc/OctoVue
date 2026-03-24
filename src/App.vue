<template>
  <div class="dracula-layout">
        <!-- Sidebar -->
        <SidebarMenu />

        <!-- Main Editor Area -->
        <main class="editor-area">
            <EditorTabs :currentTabName="currentTabName" />
            <div class="editor-content">
                <div class="line-numbers">
                    <div class="line" v-for="n in 12" :key="n">{{ n }}</div>
                </div>
                <div class="code-area">
                    <router-view />
                </div>
            </div>
            <notifications position="top right" />
        </main>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import SidebarMenu from './components/SidebarMenu.vue'
import EditorTabs from './components/EditorTabs.vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from './stores/themeStore'

const route = useRoute()
const themeStore = useThemeStore()

const currentTabName = computed(() => {
    const p = route.path || '';
    if (p.includes('/docs')) return 'docs.htm';
    if (p.includes('/structure')) return 'structure.md';
    if (p.includes('/blog')) return 'blog.htm';
    if (p.includes('/author')) return 'author.htm';
    if (p.includes('/404')) return '404.htm';
    if (p.includes('/error')) return 'error.htm';
    if (p.includes('/maintenance')) return 'maintenance.htm';
    return 'index.htm';
})

watch(currentTabName, (newTabName) => {
    let finalTitle = newTabName;
    const config = themeStore.config;
    
    if (config && config.seo_enable_title && config.seo_base_title) {
        if (config.seo_title_position === 'prefix') {
            finalTitle = config.seo_base_title + ' ' + newTabName;
        } else {
            finalTitle = newTabName + ' ' + config.seo_base_title;
        }
    }
    
    document.title = finalTitle;
}, { immediate: true })

onMounted(() => {
    themeStore.initTheme()
})

</script>
