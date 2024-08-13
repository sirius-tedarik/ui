import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "live-demo") {
    return {
      base: "./",
      plugins: [vue()],
      test: {
        globals: true,
      },
      resolve: {
        alias: {
          "~": resolve(__dirname, "src", "ui"),
        },
      },
      build: {
        rollupOptions: {
          input: ["index.html"],
        },
      },
    };
  } else {
    return {
      plugins: [vue()],
      test: {
        globals: true,
        environment: "jsdom",
        includeSource: ["src/**/*.spec.ts", "src/**/*.test.ts"],
      },
      resolve: {
        alias: {
          "~": resolve(__dirname, "src", "ui"),
        },
      },
      build: {
        lib: {
          entry: resolve(__dirname, "src/ui/index.ts"),
          name: "ui",
          fileName: "siri-ui",
        },
        rollupOptions: {
          external: ["vue"],
          output: {
            globals: {
              vue: "Vue",
            },
          },
        },
      },
    };
  }
});
