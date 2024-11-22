import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import' // Importa el plugin
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'src/components/ui/*.tsx']
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended
    ],
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
      'react-hooks/rules-of-hooks': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Built-in modules like 'fs' or 'path'
            'external', // External libraries (e.g., 'react')
            'internal', // Internal files
            ['parent', 'sibling', 'index'] // Parent, sibling, and index files
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    }
  }
)

// import js from "@eslint/js";
// import eslintConfigPrettier from "eslint-config-prettier";
// import importPlugin from "eslint-plugin-import"; // Importa el plugin
// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import globals from "globals";
// import tseslint from "typescript-eslint";

// export default tseslint.config(
//   { ignores: ["node_modules", "dist", "src/components/ui"] },
//   {
//     extends: [
//       js.configs.recommended,
//       ...tseslint.configs.recommended,
//       // eslintConfigPrettier,
//       eslintPluginPrettierRecommended,
//       // {
//       //   'no-tabs': ['error', { allowIndentationTabs: true }],
//       //   quotes: [
//       //     'error',
//       //     'single',
//       //     { avoidEscape: true, allowTemplateLiterals: false }
//       //   ]
//       // }
//     ],
//     files: ["**/*.{js,ts,tsx}"],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//       import: importPlugin,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       "react-refresh/only-export-components": [
//         "warn",
//         { allowConstantExport: true },
//       ],
//       "@typescript-eslint/ban-ts-comment": "off",
//       "react-hooks/rules-of-hooks": "warn",
//       "import/order": [
//         "error",
//         {
//           groups: [
//             "builtin",
//             "internal",
//             "external",
//             "parent",
//             "sibling",
//             "index",
//           ],
//           "newlines-between": "always",
//           alphabetize: { order: "asc", caseInsensitive: true },
//         },
//       ],
//     },
//   },
// );
