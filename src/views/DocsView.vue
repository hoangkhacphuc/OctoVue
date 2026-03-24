<template>
    <div class="vue-container mx-auto">
        <div class="title text-base sm:text-lg mb-6">/* Component: docs.htm | Boilerplate Installation & Guidelines */</div>
        
        <div class="space-y-4">
            <!-- Accordion Items -->
            <div 
                v-for="(sec, idx) in sections" 
                :key="idx" 
                class="border border-gray-700 rounded-md bg-[#282a36] shadow-md overflow-hidden transition-all duration-300"
            >
                <button 
                    @click="toggle(idx)" 
                    class="w-full flex justify-between items-center p-4 sm:p-5 text-left hover:bg-gray-800 transition-colors focus:outline-none"
                    :class="{ 'border-b border-gray-700 bg-gray-800': activeIdx === idx }"
                >
                    <span class="text-[#ffb86c] font-bold text-lg sm:text-xl">
                        <span class="text-gray-500 mr-3 text-sm sm:text-base">0{{ idx + 1 }}.</span>
                        {{ sec.title }}
                    </span>
                    <svg 
                        class="w-6 h-6 text-[#ff79c6] transition-transform duration-300" 
                        :class="{'rotate-180': activeIdx === idx}" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                
                <div 
                    class="grid transition-all duration-300 ease-in-out"
                    :class="activeIdx === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                >
                    <div class="overflow-hidden">
                        <div class="p-5 sm:p-6 text-[#f8f8f2] leading-relaxed text-[0.95rem] sm:text-base font-mono bg-[#1e1f29] border-t border-gray-700">
                            <div v-html="sec.content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Manage accordion active state
const activeIdx = ref(0)

const toggle = (idx) => {
    activeIdx.value = activeIdx.value === idx ? -1 : idx;
}

// Hardcoded Document Array removing reliance on fake REST APIs
const sections = [
    {
        title: "Introduction & Environment Requirements",
        content: `
            <p class="mb-4">OctoVue Boilerplate establishes a profound link between October CMS's Headless routing capabilities and Vue 3's virtual DOM manipulations.</p>
            <p class="text-[#8be9fd] mb-2">// Prerequisite Checklist:</p>
            <ul class="list-none space-y-2 mt-2 text-[#ff79c6]">
                <li><span class="text-gray-400 mr-2">-&gt;</span><span class="text-[#f8f8f2]">October CMS 3.x+ Core Engine</span></li>
                <li><span class="text-gray-400 mr-2">-&gt;</span><span class="text-[#f8f8f2]">Node.js >= 18</span></li>
                <li><span class="text-gray-400 mr-2">-&gt;</span><span class="text-[#f8f8f2]">NPM or Yarn Package Manager</span></li>
            </ul>
        `
    },
    {
        title: "Initial Installation & Setup",
        content: `
            <p class="mb-3 text-gray-400">// Step 1: Install the theme natively via October CMS Artisan CLI from the Marketplace</p>
            <pre class="bg-black p-4 rounded border border-gray-700 text-[#50fa7b] shadow-inner font-bold tracking-wide overflow-x-auto mb-4">php artisan theme:install HoangKhacPhuc.octovue octovue</pre>
            
            <p class="mb-3 text-gray-400">// Step 2: Navigate into the installed theme directory & pull Node dependencies</p>
            <pre class="bg-black p-4 rounded border border-gray-700 text-[#50fa7b] shadow-inner font-bold tracking-wide overflow-x-auto">cd themes/octovue<br>npm install</pre>
            
            <p class="mt-4">This sequence will autonomously extract and install Vite 5, Vue 3, Tailwind CSS v4, and Pinia strictly onto your local directory without corrupting global parameters.</p>
        `
    },
    {
        title: "Vite Development Server Routine",
        content: `
            <p class="mb-3">During development blocks, trigger the Vite Bundler engine to listen for instantaneous file rewrites.</p>
            <pre class="bg-black p-4 rounded border border-gray-700 text-[#50fa7b] shadow-inner font-bold tracking-wide overflow-x-auto">npm run dev</pre>
            <p class="mt-4 text-[#8be9fd]">// Architecture Note:</p>
            <p class="mt-2 text-gray-400">Unlike typical standalone Vue SPA configurations, OctoVue maps routing algorithms directly into October CMS layout shells (<span class="text-[#f1fa8c]">layouts/default.htm</span>). Ensure your localhost backend server (<span class="text-[#f1fa8c]">php artisan serve</span>) is simultaneously active to fetch index skeletons successfully.</p>
        `
    },
    {
        title: "Creating a New Route/Page",
        content: `
            <p class="mb-2 text-gray-400">// Step 1: Create a Vue Component file inside <span class="text-[#f1fa8c]">src/views/YourView.vue</span></p>
            <p class="mb-3 text-gray-400">// Step 2: Bind the UI Component against the Vue Router hook in <span class="text-[#f1fa8c]">src/router/index.js</span></p>
            <pre class="bg-black p-4 rounded border border-gray-700 text-[#ff79c6] shadow-inner overflow-x-auto">import YourView from '../views/YourView.vue';<br>...<br>{ path: '/custom-route', component: YourView }</pre>
            <p class="mt-4 text-gray-400">// Important Mechanism:</p>
            <p class="mt-2">The wildcard mapper <span class="text-white bg-gray-700 px-2 py-0.5 rounded">/:slug*</span> injected within the <span class="text-[#f1fa8c]">pages/index.htm</span> file ensures October CMS skips native 404 traps and automatically drops the navigation request down to Vue Router gracefully.</p>
        `
    },
    {
        title: "Global Utility Classes & Tailwind PostCSS",
        content: `
            <p class="mb-4">OctoVue strictly splits component aesthetics from layout structures utilizing PostCSS integration hooks.</p>
            <ul class="list-none space-y-4 text-[#8be9fd]">
                <li>
                    <strong class="text-[#bd93f9] text-base"># Tailwind v4 Compiler:</strong>
                    <br><span class="text-[#f8f8f2] inline-block mt-1">Apply native utility classes like <span class="bg-gray-800 px-1 rounded text-[#ffb86c]">mt-4</span> or <span class="bg-gray-800 px-1 rounded text-[#ffb86c]">grid-cols-2</span> strictly within your Vue HTML templates. Tailwind actively scans the filesystem mapping logic instantly.</span>
                </li>
                <li>
                    <strong class="text-[#bd93f9] text-base"># Atomic LESS Pipelines:</strong>
                    <br><span class="text-[#f8f8f2] inline-block mt-1">For heavily nested custom CSS blocks avoiding HTML bloat strings, write rules inside <span class="text-white hover:underline">src/assets/less/components/*.less</span> imported hierarchically via the <span class="text-white border-b border-gray-600">app.less</span> master tree.</span>
                </li>
            </ul>
        `
    },
    {
        title: "Compiling for Production Assets",
        content: `
            <p class="mb-3">Before shipping code boundaries to your live VPS/Server node, absolutely ALWAYS explicitly compile the JS/CSS bundle payloads.</p>
            <pre class="bg-black p-4 rounded border border-gray-700 text-[#50fa7b] shadow-inner font-bold tracking-wide overflow-x-auto">npm run build</pre>
            <p class="mt-4 text-gray-400">// What does this trigger?</p>
            <p class="mt-2">This dedicated command executes Vite to drastically compress JavaScript variables, minify CSS algorithms, tree-shake dead Tailwind Utilities tracking memory, and finally outputs everything perfectly hashed into the <span class="text-[#f1fa8c]">assets/dist/js/main.js</span> and <span class="text-[#f1fa8c]">assets/dist/css/main.css</span> paths.</p>
            <p class="mt-2 text-[#50fa7b]">October CMS natively ingests these chunked dist files routing them safely to the requesting browser.</p>
        `
    }
];
</script>
