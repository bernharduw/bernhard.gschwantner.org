module.exports = {
  extends: 'react-app',
  rules: {
    'no-var': 'error', // optional, recommended when using es6+
    'no-unused-vars': 1, // recommended
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        objects: 'only-multiline',
        arrays: 'only-multiline',
        imports: 'only-multiline',
        exports: 'never',
        functions: 'never',
      },
    ],
    // react plugin - options
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
};
