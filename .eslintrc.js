module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline',
        imports: 'only-multiline',
        objects: 'only-multiline',
      },
    ],
  }
};
