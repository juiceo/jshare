import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: true,
    skipNodeModulesBundle: true,
    noExternal: ['@jshare/db', '@jshare/common', 'lodash'],
    sourcemap: false,
    minify: false,
    format: ['esm'],
    clean: true,
    dts: true,
    bundle: true,
    outDir: 'build',
    treeshake: true,
    watch: false,
    platform: 'node',
    target: 'node20',
    replaceNodeEnv: true,
    shims: true,
});
