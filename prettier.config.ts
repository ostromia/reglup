import type { Config } from "prettier";

const config: Config = {
    useTabs: false,
    tabWidth: 4,
    singleQuote: false,
    trailingComma: "none",
    printWidth: 100,
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: [
        "^(react|react-dom|react-dom/(client|server))$",
        "<THIRD_PARTY_MODULES>",
        "^[./]"
    ],
    importOrderSeparation: false
};

export default config;
