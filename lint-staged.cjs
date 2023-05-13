module.exports = {
  '*.{js,jsx,ts,tsx}': [
      'eslint --ext .js,.jsx',
      'npx prettier',
      'vitest --passWithNoTests',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
}