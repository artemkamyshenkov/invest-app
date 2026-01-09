// This configuration only applies to the package manager root.
import { config } from './packages/eslint-config/base.js';

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**', '.turbo/**'],
  },
];
