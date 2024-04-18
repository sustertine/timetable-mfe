// vite.config.ts
import { defineConfig } from "file:///D:/Projects/timetable-manager-app/timetable-mfe/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Projects/timetable-manager-app/timetable-mfe/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/Projects/timetable-manager-app/timetable-mfe/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueDevTools from "file:///D:/Projects/timetable-manager-app/timetable-mfe/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import tailwind from "file:///D:/Projects/timetable-manager-app/timetable-mfe/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/Projects/timetable-manager-app/timetable-mfe/node_modules/autoprefixer/lib/autoprefixer.js";
import * as path from "path";
import federation from "file:///D:/Projects/timetable-manager-app/timetable-mfe/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\Projects\\timetable-manager-app\\timetable-mfe";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    federation({
      name: "timetable-mfe",
      remotes: {
        "timetable-users-mfe": " http://localhost:4173/assets/userMfe.js"
      },
      shared: ["vue"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFx0aW1ldGFibGUtbWFuYWdlci1hcHBcXFxcdGltZXRhYmxlLW1mZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxcdGltZXRhYmxlLW1hbmFnZXItYXBwXFxcXHRpbWV0YWJsZS1tZmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3RzL3RpbWV0YWJsZS1tYW5hZ2VyLWFwcC90aW1ldGFibGUtbWZlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtmaWxlVVJMVG9QYXRoLCBVUkx9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcblxuaW1wb3J0IHRhaWx3aW5kIGZyb20gJ3RhaWx3aW5kY3NzJ1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tIFwiQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb25cIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgY3NzOiB7XG4gICAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFt0YWlsd2luZCgpLCBhdXRvcHJlZml4ZXIoKV0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHZ1ZSgpLFxuICAgICAgICB2dWVKc3goKSxcbiAgICAgICAgVnVlRGV2VG9vbHMoKSxcbiAgICAgICAgZmVkZXJhdGlvbih7XG4gICAgICAgICAgICBuYW1lOiAndGltZXRhYmxlLW1mZScsXG4gICAgICAgICAgICByZW1vdGVzOiB7XG4gICAgICAgICAgICAgICAgJ3RpbWV0YWJsZS11c2Vycy1tZmUnOiAnIGh0dHA6Ly9sb2NhbGhvc3Q6NDE3My9hc3NldHMvdXNlck1mZS5qcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhcmVkOiBbJ3Z1ZSddXG4gICAgICAgIH0pXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgICBtb2R1bGVQcmVsb2FkOiBmYWxzZSxcbiAgICAgICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgICAgICBtaW5pZnk6IGZhbHNlLFxuICAgICAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgLy8gJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICAgICAgfVxuICAgIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUSxvQkFBbUI7QUFDM0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGlCQUFpQjtBQUV4QixPQUFPLGNBQWM7QUFDckIsT0FBTyxrQkFBa0I7QUFDekIsWUFBWSxVQUFVO0FBQ3RCLE9BQU8sZ0JBQWdCO0FBVnZCLElBQU0sbUNBQW1DO0FBYXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLEtBQUs7QUFBQSxJQUNELFNBQVM7QUFBQSxNQUNMLFNBQVMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQUEsSUFDeEM7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDTCx1QkFBdUI7QUFBQSxNQUMzQjtBQUFBLE1BQ0EsUUFBUSxDQUFDLEtBQUs7QUFBQSxJQUNsQixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUE7QUFBQSxNQUVILEtBQVUsYUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDeEM7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
