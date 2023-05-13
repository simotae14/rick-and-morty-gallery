module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [
      'npx prettier --write',
      'eslint',
      'vitest --passWithNoTests',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
}