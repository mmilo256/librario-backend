import { z } from 'zod'

const authorSchema = z.object({
  author_name: z.string()
})

export const validateAuthor = (authorData) => {
  return authorSchema.safeParse(authorData)
}
