import { defineConfig } from "orval";

export default defineConfig({
  roundest: {
    output: {
      mode: "split",
      target: "src/__generated__/api/roundest/roundestApi.ts",
      schemas: "src/__generated__/api/roundest/model",
      client: "react-query",
      mock: false,
    },
    input: {
      target: "src/openapi/roundest.yaml",
    },
  },
});
