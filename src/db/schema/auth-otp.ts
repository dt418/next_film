import { bigint, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { users } from "./user";

export const authOtps = mysqlTable("auth_otp", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  phone: varchar("phone", { length: 256 }),
  userId: int("user_id").references(() => users.id),
});
