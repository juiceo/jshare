import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['index.ts'],
    splitting: true,
    skipNodeModulesBundle: true,
    sourcemap: false,
    minify: false,
    format: ['cjs', 'esm'],
    clean: true,
    dts: true,
    outDir: 'build',
    treeshake: true,
    watch: false,
    platform: 'neutral',
    target: 'es2020',
    replaceNodeEnv: true,
    external: ['@instantdb/core'],
});
