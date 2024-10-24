module.exports = {
    extends: [
        'eslint-config-universe',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    // // do some additional things with it
    rules: {
        'prettier/prettier': 0,
        'import/order': 0,
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': 'off',
    },
    // Disable import/namespace due to https://github.com/facebook/react-native/issues/28549
    // By setting delimiters to `\|/`, this ignore is supported on Windows too
    settings: {
        'import/ignore': ['node_modules(\\\\|/)react-native(\\\\|/)index\\.js$'],
        react: {
            version: 'detect',
            defaultVersion: '18.2.0',
        },
    },
    overrides: [
        {
            files: ['*.tsx', '*.ts'],
        },
    ],
    env: {
        node: true,
    },
};
