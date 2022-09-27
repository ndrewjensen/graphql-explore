
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "\u200B\u200Bhttps://users-messages-gql.herokuapp.com/graphql",
  documents: "src/**/*.tsx",
  generates: {
    "src/gql": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
