import { defineCollection, reference, z } from "astro:content";

const news = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: reference("authors"),
      date: z.date(),
      description: z.string(),
      tags: z.array(reference("tags")),
      image: image(),
    }),
});

const tags = defineCollection({
  type: "content",
  schema: () => z.object({ name: z.string() }),
});

const authors = defineCollection({
  type: "data",
  schema: () => z.object({ name: z.string() }),
});

const data = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .array(z.object({ image: image(), alt: z.string(), url: z.string() }))
      .or(z.any()),
});

export const collections = {
  authors,
  data,
  tags,
  news,
};
