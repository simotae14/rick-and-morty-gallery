module.exports = {
  '*.{js,jsx,ts,tsx}': [
      'eslint --max-warnings=0',
      'npx prettier',
      'vitest --passWithNoTests',
      () => 'tsc-files --noEmit',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
}