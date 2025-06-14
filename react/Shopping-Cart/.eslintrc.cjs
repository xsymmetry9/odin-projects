module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    "parseOtions": {
      "ecmaFeatures": {
        "jsx": true
      }
    },
  ecmaVersion: 'latest', 
  sourceType: 'module' },

  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    "react/jsx-uses-react": error,
    "react/jsx-uses-vars": error,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
