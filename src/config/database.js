import { config } from "../lib/config.js";

export default {
  development: {
    url: config.db_uri,
    dialect: "postgres",
  },
  test: {
    url: config.db_uri,
    dialect: "postgres",
  },
  production: {
    url: config.db_uri,
    dialect: "postgres",
  },
};
