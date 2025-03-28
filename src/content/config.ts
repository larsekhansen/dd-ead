import { defineCollection, z } from "astro:content";

const blogg = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    kategori: z
      .enum(["teknologi", "strategi", "case-studie", "veiledning"])
      .optional(),
    tags: z.array(z.string()).optional()
  })
});

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    type: z.enum(["guide", "verktøy", "dokument", "presentasjon"]),
    tags: z.array(z.string()).optional()
  })
});

const cases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    organization: z.string(),
    sector: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional()
  })
});

export const collections = {
  blogg,
  resources,
  cases
};
