# SHIBA TV

## Tech Stack

- [React](https://reactjs.org) v18
- [TypeScript](https://www.typescriptlang.org) v5
- [ESLint](https://eslint.org)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Stylelint](https://stylelint.io)
- [Prettier](https://prettier.io)
- [testing-library](https://testing-library.com)

## App Structure

```
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json       // metadata for installed web app
├── src
│   ├── assets              // Static files (e.g. images, fonts etc.)
│   ├── components          // UI and other components
│   ├── Layouts             // Layout components
│   ├── utils               // App utility functions
│   ├── index.tsx           // App entry
│   ├── reportWebVitals.ts  // Setup Vitals report
│   ├── reset.css           // Reset and align style
│   └── setupTests.ts       // Setup file with testing-library and Jest
├── .eslintrc.json          // ESLint configuration
├── .prettierrc             // Prettier configuration
├── .stylelintrc            // Stylelint configuration
└── tsconfig.js             // TypeScript configuration
```
