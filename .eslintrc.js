module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 8, // to enable features such as async/await
    },
    ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.prettierrc.js"], // We don"t want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    overrides: [
      // This configuration will apply only to TypeScript files
      {
        files: ["*.ts", "*.tsx"],
        parser: "@typescript-eslint/parser",
        settings: {react: {version: "detect"}},
        env: {
          browser: true,
          node: true,
          es6: true,
        },
        extends: [
          "next",
          "eslint:recommended",
          "react-app",
          "airbnb",
          "prettier",
          "plugin:@typescript-eslint/recommended", // TypeScript rules
          "plugin:react/recommended", // React rules
          "plugin:react-hooks/recommended", // React hooks rules
          "plugin:jsx-a11y/recommended", // Accessibility rules
          "plugin:import/recommended", // Import rules
          "plugin:prettier/recommended", // Prettier
        ],
        rules: {
          // Off
          "react/jsx-props-no-spreading": "off",
          "react/state-in-constructor": "off",
          "react/static-property-placement": "off",
          "react/no-array-index-key": "off",
          "react/react-in-jsx-scope": "off",
          "jsx-a11y/click-events-have-key-events": "off",
          "jsx-a11y/anchor-is-valid": "off",
          "react/prop-types": "off",
          "no-unused-vars": "off",
          "react/require-default-props": "off",
          "no-shadow": "off",
          "no-restricted-exports": "off",
          "jsx-a11y/interactive-supports-focus": "off",
  
          // Weak warning
          "import/no-unresolved": 0,
          "no-case-declarations": 0,
          "no-nested-ternary": 0,
          "no-underscore-dangle": 0,
          "no-lonely-if": 0,
          "no-param-reassign": 0,
          "no-plusplus": 0,
          "prefer-template": 0,
          "object-shorthand": 0,
          "react-hooks/exhaustive-deps": 0,
          "react/forbid-prop-types": 0,
          "react/destructuring-assignment": 0,
          "react/no-access-state-in-setstate": 0,
          "import/order": 0,
          "import/no-mutable-exports": 0,
          "class-methods-use-this": 0,
          "import/prefer-default-export": 0,
          "no-prototype-builtins": 0,
          "import/no-named-as-default": 0,
          "global-require": 0,
          "max-classes-per-file": 0,
          "newline-per-chained-call": 0,
          "default-param-last": 0,
          "default-case": 0,
          "max-len": [0, {code: 80, ignorePattern: true}],
  
          // Warning
          "semi": 1,
          "no-console": 1,
          "max-statements-per-line": [1, {max: 2}],
          "react/jsx-filename-extension": [1, {extensions: [".ts", ".tsx"]}],
          "quotes": [
            1,
            "double",
            {avoidEscape: true, allowTemplateLiterals: true},
          ],
          "@typescript-eslint/explicit-function-return-type": 1,
  
          // Error
          "import/no-cycle": "error",
          "no-useless-return": "error",
          "block-scoped-var": "error",
          "no-var": "error",
          "no-whitespace-before-property": "error",
          "camelcase": "error",
          "prefer-const": "error",
          "no-dupe-else-if": "error",
          "no-duplicate-imports": "error",
          "lines-between-class-members": "error",
          "no-trailing-spaces": "error",
          "keyword-spacing": "error",
          "jsx-quotes": "error",
          "comma-style": "error",
          "comma-spacing": "error",
          "arrow-spacing": "error",
          "@typescript-eslint/no-unused-vars": "error",
          "react/jsx-no-bind": [
            "error",
            {allowBind: true, allowArrowFunctions: true},
          ],
          "no-multi-spaces": [
            "error",
            {
              ignoreEOLComments: true,
              exceptions: {ImportDeclaration: true},
            },
          ],
          "no-use-before-define": [
            "error",
            {functions: false, classes: false, variables: false},
          ],
          "import/extensions": [
            "error",
            "ignorePackages",
            {
              js: "never",
              jsx: "never",
              ts: "never",
              tsx: "never",
            },
          ],
          "no-restricted-syntax": [
            "error",
            "ForInStatement",
            "LabeledStatement",
            "WithStatement",
          ],
        },
      },
    ],
  };
  