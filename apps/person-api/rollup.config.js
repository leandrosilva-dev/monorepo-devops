// filepath: /home/leandro/Projects/Devops/apps/person-api/rollup.config.js
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts', // Entry point of your application
  output: {
    file: 'dist/index.js', // Output file
    format: 'es', // CommonJS format
    sourcemap: true, // Enable source maps
  },
  plugins: [
    json(), 
    resolve(), // Resolves node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript(), // Transpiles TypeScript
    terser(), // Minifies the output
  ],
};