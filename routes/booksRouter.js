import { Router } from 'express'
import { BooksController } from '../controllers/booksController.js'

export const booksRouter = Router()

booksRouter.get('/', BooksController.getAllBooks)
booksRouter.get('/:id', BooksController.getBookById)
booksRouter.post('/', BooksController.createBook)
booksRouter.delete('/:id', BooksController.deleteBook)
booksRouter.patch('/:id', BooksController.updateBook)
