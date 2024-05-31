import { z } from 'zod'

const bookSchema = z.object({
  title: z.string(),
  book_desc: z.string(),
  image_url: z.string(),
  author_id: z.number().int(),
  genre_id: z.number().int()
})

export const validateBook = (bookData) => {
  return bookSchema.safeParse(bookData)
}

export const validatePartialBook = (bookData) => {
  return bookSchema.partial().safeParse(bookData)
}
