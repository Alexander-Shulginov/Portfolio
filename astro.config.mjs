// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
    integrations: [
        icon({
            iconDir: 'src/assets/icons',
        }),
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use '@/styles/vars.scss' as *;
                        @use '@/styles/functions.scss' as *;
                    `,
                },
            },
        },
    },
});
