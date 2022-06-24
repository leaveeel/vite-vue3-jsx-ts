import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx({})
    ],
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://192.168.1.234:8606',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        },
    },
})
