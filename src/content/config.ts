import { defineCollection, reference, z } from "astro:content";

const members = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.array(
      z.object({
        name: z.string(),
        alt: z.string(),
        url: z.string(),
        image: image(),
      })
    ),
});

const blogs = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
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

export const collections = {
  members,
  blogs,
  tags,
};
