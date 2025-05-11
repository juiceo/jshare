import * as esbuild from 'esbuild';
import { copy } from 'esbuild-plugin-copy';

await esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'build/index.js',
    platform: 'node',
    plugins: [
        copy({
            assets: [
                {
                    from: ['./src/templates/**/*'],
                    to: ['./templates'],
                },
            ],
        }),
    ],
});
