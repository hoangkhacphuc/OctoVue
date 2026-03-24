import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        config: {}
    }),
    actions: {
        initTheme() {
            if (window.ThemeConfig) {
                this.config = window.ThemeConfig;
            }
        }
    }
});
