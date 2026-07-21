import {
    mysqlTable,
    int,
    timestamp,
    varchar,
} from "drizzle-orm/mysql-core";

export const urlsTable = mysqlTable("urls", {
    id: int("id").primaryKey().autoincrement(),
    originalUrl: varchar("original_url", {length: 255}).notNull(),
    shortUrl: varchar("short_url", {length: 255}).notNull().unique(),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").notNull().defaultNow().onUpdateNow(),
});
