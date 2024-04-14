import type { Config } from "drizzle-kit";

import config from "@/lib/config";

import "dotenv/config";

export default {

  schema: "./src/db/schema/*.ts",
  out: "./drizzle",
  driver: "mysql2", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: config.DB_HOST,
    user: config.DB_USER!,
    password: config.DB_PASSWORD!,
    database: config.DB_NAME!,
  },
} satisfies Config;
