import {
  boolean,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core"

export const postTypeEnum = pgEnum("post_type", ["article", "achievement"])

export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  title: varchar("title", { length: 300 }).notNull(),
  excerpt: text("excerpt").notNull().default(""),
  body: text("body").notNull().default(""),
  type: postTypeEnum("type").notNull().default("article"),
  coverImageUrl: text("cover_image_url"),
  published: boolean("published").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
})

export type Post = typeof posts.$inferSelect
export type NewPost = typeof posts.$inferInsert
export type PostType = "article" | "achievement"
