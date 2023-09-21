import { defineCollection, z } from "astro:content";

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

export const collections = {
  members,
};
