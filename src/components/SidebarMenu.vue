<template>
    <aside class="sidebar">
        <div class="sidebar-header">
            <img v-if="themeStore.config.logo_white" :src="themeStore.config.logo_white" class="sidebar-logo" alt="Logo" />
            <span class="sidebar-title" v-if="themeStore.config.website_name" :class="{'has-logo': themeStore.config.logo_white}">{{ themeStore.config.website_name }}</span>
        </div>
        <ul class="sidebar-menu">
            <li><router-link to="/">index.htm</router-link></li>
            <li><router-link to="/docs">docs.htm</router-link></li>
            <li><router-link to="/structure">structure.md</router-link></li>
            <li><router-link to="/blog">blog.htm</router-link></li>
            <li><router-link to="/author">author.htm</router-link></li>
        </ul>
    </aside>
</template>

<script setup>
import { useThemeStore } from '../stores/themeStore'

const themeStore = useThemeStore()
</script>
