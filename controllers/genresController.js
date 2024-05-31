import { GenreModel } from '../models/genreModel.js'
import { validateGenre } from '../schemas/genreSchema.js'

export class GenresController {
  // Obtener todos los géneros
  static getAllGenres = async (req, res) => {
    try {
      const response = await GenreModel.getAllGenres()
      res.json(response)
    } catch (e) {
      console.log('Error al obtener todos los géneros.', e)
    }
  }

  // Obtener género por ID
  static getGenreById = async (req, res) => {
    try {
      const { id } = req.params
      const response = await GenreModel.getGenreById(id)
      res.json(response)
    } catch (e) {
      console.log('Error al obtener el género requerido.', e)
    }
  }

  // Crear nuevo género
  static createGenre = async (req, res) => {
    try {
      const newGenre = validateGenre(req.body)
      if (!newGenre.success) res.json({ message: 'Datos del género no válidos.' })
      const newGenreData = {
        ...newGenre.data
      }
      const response = await GenreModel.createGenre(newGenreData)
      res.json({ message: 'Género creado exitosamente.', response, newGenreData })
    } catch (e) {
      console.log('Error al crear género.', e)
    }
  }

  // Borrar un género por ID
  static deleteGenre = async (req, res) => {
    try {
      const { id } = req.params
      const response = await GenreModel.deleteGenre(id)
      res.json({ message: 'Género borrado exitosamente.', response })
    } catch (e) {
      console.log('Error al borrar género.', e)
    }
  }

  // Editar un género por ID
  static updateGenre = async (req, res) => {
    try {
      const genre = validateGenre(req.body)
      if (!genre.success) res.json({ message: 'Datos del género no válidos.' })
      const { id } = req.params
      const genreData = {
        ...genre.data
      }
      const response = await GenreModel.updateGenre(id, genreData)
      res.json({ message: 'Género modificado exitosamente.', response })
    } catch (e) {
      console.log('Error al editar género.', e)
    }
  }
}
