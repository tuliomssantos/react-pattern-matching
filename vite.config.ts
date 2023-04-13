import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

export interface UserConfig extends VitestUserConfigInterface {
  test: {
    globals: boolean;
    environment: "jsdom" | "node";
    setupFiles: string;
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup-tests.js',
  },
});
