module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './resources/js'],
          ['~', './resources/sass'],
          ['@components', './resources/js/components'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
