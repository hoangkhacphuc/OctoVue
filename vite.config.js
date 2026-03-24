import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: 'assets/dist',
        emptyOutDir: true,
        manifest: false, // Turn off manifest, we will use static file names
        rollupOptions: {
            input: {
                main: 'src/main.js'
            },
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: 'css/[name].[ext]'
            }
        }
    }
});
