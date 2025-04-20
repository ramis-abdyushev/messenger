import {defineConfig} from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default defineConfig([
    {
        files: ["**/*.{js,ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactPlugin.configs.flat.recommended,
            reactPlugin.configs.flat['jsx-runtime']
        ],
        languageOptions: { globals: globals.browser },
    },
]);
