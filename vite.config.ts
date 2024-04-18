import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import * as path from "path";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        VueDevTools(),
        federation({
            name: 'timetable-mfe',
            remotes: {
                'timetable-users-mfe': ' http://localhost:4173/assets/userMfe.js',
            },
            shared: ['vue']
        })
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
    resolve: {
        alias: {
            // '@': fileURLToPath(new URL('./src', import.meta.url)),
            "@": path.resolve(__dirname, "./src"),
        }
    }
})
