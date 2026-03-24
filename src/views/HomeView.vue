<template>
    <div class="vue-container">
        <div class="title text-base sm:text-lg mb-4">/* Component: index.htm (HomeView.vue) | OctoVue Specifications */</div>
        <div class="docs-list">
            <div class="doc-item border-b border-gray-700 pb-6 mb-4">
                <div class="doc-title text-xl"><span class="keyword">const</span> <span class="variable">OctoVue</span> <span class="operator">=</span> {</div>
                <pre class="data-block mt-3 bg-[#282a36] text-[#f1fa8c] p-5 rounded-md shadow-lg border border-gray-700 whitespace-pre-wrap font-mono leading-relaxed relative hover:border-[#ff79c6] transition-colors duration-300">
    <span class="keyword">"version"</span>: <span class="string">"1.0.0"</span>,
    <span class="keyword">"purpose"</span>: <span class="string">"A production-ready Boilerplate to seamlessly embed Vue 3 SPA natively inside October CMS."</span>,
    <span class="keyword">"notice"</span>: <span class="string">"All built-in pages (Blog, Author, Docs) are purely DEMO SAMPLES serving as implementation guides."</span>,
    
    <span class="keyword">"core_stack"</span>: [
        <span class="string">"October CMS (Acts securely as a Headless REST API Provider)"</span>,
        <span class="string">"Vue.js 3 (Takes full control over Frontend DOM rendering)"</span>,
        <span class="string">"Vite 5 (Handles Hot Module Replacement & Asset Bundling)"</span>,
        <span class="string">"Tailwind CSS v4 (Compiles utility classes on-the-fly)"</span>,
        <span class="string">"Pinia (Global Store strictly managing State & API Cache)"</span>
    ],

    <span class="keyword">"how_it_works"</span>: {
        <span class="string">"routing"</span>: <span class="string">"Vue Router entirely hijacks client-side clicks, generating true ZERO-RELOAD transitions."</span>,
        <span class="string">"seo"</span>: <span class="string">"October CMS handles the initial server &lt;head&gt; tags, then Vue assumes reactivity hook control."</span>,
        <span class="string">"fetching"</span>: <span class="string">"Components delegate heavy API parsing layers securely to Pinia backend fetch actions."</span>,
        <span class="string">"styling"</span>: <span class="string">"An Atomic pipeline blending Tailwind's JIT Compiler with Modular scoped LESS."</span>
    },

    <span class="keyword">"getting_started"</span>: [
        <span class="string">"🗑️ Delete the demo views (BlogView, DocsView) and clear out the SidebarMenu layouts."</span>,
        <span class="string">"🏗️ Build your own custom Vue Components mapping specifically to your October CMS datasets."</span>,
        <span class="string">"🚀 Run 'npm run dev' to boot Vite and start creating your own Masterpiece SPA!"</span>
    ]
</pre>
                <div class="doc-title text-xl mt-3">};</div>
            </div>
            
            <div class="doc-item" style="border-bottom: none;">
                <div class="doc-title text-xl"><span class="keyword">function</span> <span class="function">initSystem</span>() {</div>
                <div class="doc-content pl-8 space-y-2 mt-4 text-gray-400">
                    <p class="comment text-sm sm:text-base">// 🛠️ This Boilerplate is living proof of how gracefully Vue exists inside October CMS.</p>
                    <p class="comment text-sm sm:text-base">// 🧱 Use this foundational Architecture as a bedrock toolkit for your Web Apps.</p>
                    <p class="comment text-sm sm:text-base">// ⚡ Feel free to drop the Demo Pages and construct your proprietary logic!</p>
                    
                    <div class="mt-6 flex flex-wrap gap-4 items-center">
                        <router-link to="/structure" class="btn px-6 py-2 shadow hover:-translate-y-1 transition-transform">Explore System_Architecture()</router-link>
                        <span class="text-gray-600 font-bold hidden sm:inline-block">||</span>
                        <router-link to="/blog" class="btn px-6 py-2 shadow hover:-translate-y-1 transition-transform" style="background-color: #ff79c6;">Fetch API_Data()</router-link>
                    </div>
                </div>
                <div class="doc-title text-xl mt-5">}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>
