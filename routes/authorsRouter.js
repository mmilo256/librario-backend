import { Router } from 'express'
import { AuthorsController } from '../controllers/authorsController.js'

export const authorsRouter = Router()

authorsRouter.get('/', AuthorsController.getAllAuthors)
authorsRouter.get('/:id', AuthorsController.getAuthorById)
authorsRouter.post('/', AuthorsController.createAuthor)
authorsRouter.delete('/:id', AuthorsController.deleteAuthor)
authorsRouter.patch('/:id', AuthorsController.updateAuthor)
