module.exports = {
  tabWidth: 2,
  printWidth: 140,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.md', '*.json', '*.yaml', '*.yml'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
