import next from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "out/**", "build/**", "app/components/dist/**"],
  },
  ...next,
];

export default config;
