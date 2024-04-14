import { bigint, index, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable(
  "users",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    fullName: varchar("full_name", { length: 256 }),
  },
  (users) => ({
    nameIdx: index("name_idx").on(users.fullName),
  })
);
