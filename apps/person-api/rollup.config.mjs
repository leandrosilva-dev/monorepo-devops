import { defineConfig } from "rollup";

import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";

import json from "@rollup/plugin-json";
import externals from 'rollup-plugin-node-externals';

import esbuild from 'rollup-plugin-esbuild';

import { glob } from 'glob';

export default defineConfig([
  {
    input: [
      'src/main.ts',
      ...glob.sync('src/app/plugins/*ts'),
      ...glob.sync('src/app/contracts/*ts'),
    ],
    output: {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named',
    },
    plugins: [
      externals({
        preferBuiltins: true,
      }),
      resolve(),
      esbuild({
        sourceMap: true,
        target: 'esnext',
        charset: 'utf8',
        minify: false,
        minifyIdentifiers: false,
        minifySyntax: false,
        minifyWhitespace: false,
        tsconfig: './tsconfig.app.json',
        keepNames: false,

        loaders: {
          '.json': 'json'
        },
      }),
      commonjs({
        extensions: ['.js'],
      }),
      json(),
    ],
  },
]);
