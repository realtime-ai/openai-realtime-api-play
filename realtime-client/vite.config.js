const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "realtime-client",
      fileName: (format) => `realtime-client.${format}.js`,
    },
    minify: false,
    rollupOptions: {
      output: {
        globals: {},
      },
    },
  },
});
