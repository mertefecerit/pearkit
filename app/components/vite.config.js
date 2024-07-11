import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: './src/index.js',
            name: 'BubbleUI',
            fileName: (format) => `bubbleUi.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom','lodash','prop-types','framer-motion'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'prop-types': 'PropTypes',
                    'framer-motion': 'framerMotion',
                    'lodash': '_'
                }
            }
        }
    }
});