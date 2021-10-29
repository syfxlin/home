import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentPath = path.join(process.cwd(), "content");
const pagesPath = path.join(contentPath, "pages");

export const getPageBySlug = (slug: string, fields: string[] = []) => {
  const p = path.join(pagesPath, slug, "index.md");
  const file = fs.readFileSync(p, "utf-8");
  const { data, content } = matter(file);
  const items = {} as Record<string, any>;
  fields.forEach((field) => {
    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      if (data[field] instanceof Date) {
        data[field] = data[field].toISOString();
      }
      items[field] = data[field];
    }
  });
  return items;
};

export const getAllPages = (fields: string[] = []) => {
  const slugs = fs.readdirSync(pagesPath);
  return slugs.map((slug) => getPageBySlug(slug, fields));
};
