const stylelintConfig = {
  extends: ["stylelint-config-standard"],
  ignoreFiles: [".next/**", "out/**", "coverage/**"],
  rules: {
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]*$",
      {
        message: "Use camelCase class names in CSS Modules.",
      },
    ],
  },
};

export default stylelintConfig;
