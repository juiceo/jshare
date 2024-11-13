#!/usr/bin/env zx
import { $, fs, question } from 'zx';

console.log('Welcome to the package creation wizard!\n');

const name = await question('Enter a name for your package: ');

if (!name) {
    console.log('A name is required');
    process.exit(1);
}

function isValidName(str) {
    const regex = /^[a-z-]+$/;
    return regex.test(str);
}

if (!isValidName(name)) {
    console.log('Name can only include lowercase letters and hyphens');
    process.exit(1);
}

const description = await question('Enter a short description for your package: ');

const packageName = `@jshare/${name}`;
const packageJson = {
    private: true,
    name: packageName,
    version: '1.0.0',
    description: `${description}`,
    license: 'MIT',
    main: 'build/index.js',
    scripts: {
        lint: 'eslint --ext js,ts,tsx .',
        build: 'tsup-node',
        watch: 'tsup-node --watch',
        typecheck: 'tsc --noEmit',
    },
    devDependencies: {
        '@jshare/eslint-config': 'workspace:*',
        '@jshare/tsconfig': 'workspace:*',
        tsup: 'catalog:',
    },
    eslintConfig: {
        extends: '@jshare/eslint-config',
        ignorePatterns: ['node_modules', 'build'],
    },
};

const tsConfig = {
    extends: '@jshare/tsconfig',
    include: ['src'],
    compilerOptions: {},
};

const tsupConfig = `
    import { defineConfig } from 'tsup';
 
    export default defineConfig({
        entry: ['src/index.ts'],
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
    });
`;

const packageRoot = `packages/${name}`;
await $`mkdir -p ${packageRoot}`;
await fs.writeFile(`${packageRoot}/package.json`, JSON.stringify(packageJson, null, 4));
await fs.writeFile(`${packageRoot}/tsconfig.json`, JSON.stringify(tsConfig, null, 4));
await fs.writeFile(`${packageRoot}/tsup.config.ts`, tsupConfig);
await $`mkdir -p ${packageRoot}/src`;
await fs.writeFile(`${packageRoot}/src/index.ts`, 'export const hello = "world";');

await $`prettier '${packageRoot}/**/*.{js,jsx,ts,tsx,json}' --write`;

console.log('');
console.log(`${packageName} created in packages/${name}`);
console.log('Installing dependencies...');

await $`cd ${packageRoot} && pnpm install && cd ../..`;

console.log('');
console.log(`Done.`);
