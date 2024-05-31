import { z } from 'zod'

const genreSchema = z.object({
  genre: z.string()
})

export const validateGenre = (genreData) => {
  return genreSchema.safeParse(genreData)
}
