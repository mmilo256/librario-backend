import { Router } from 'express'
import { GenresController } from '../controllers/genresController.js'

export const genresRouter = Router()

genresRouter.get('/', GenresController.getAllGenres)
genresRouter.get('/:id', GenresController.getGenreById)
genresRouter.post('/', GenresController.createGenre)
genresRouter.delete('/:id', GenresController.deleteGenre)
genresRouter.patch('/:id', GenresController.updateGenre)
