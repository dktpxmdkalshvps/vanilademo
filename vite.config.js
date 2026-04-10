const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        survey: resolve(__dirname, 'survey.html'),
        result: resolve(__dirname, 'result.html')
      }
    }
  }
});
