import { AuthorModel } from '../models/authorModel.js'
import { validateAuthor } from '../schemas/authorSchema.js'

export class AuthorsController {
  // Obtener todos los autores
  static getAllAuthors = async (req, res) => {
    try {
      const response = await AuthorModel.getAllAuthors()
      res.json(response)
    } catch (e) {
      console.log('Error al obtener todos los autores.', e)
    }
  }

  // Obtener autor por ID
  static getAuthorById = async (req, res) => {
    try {
      const { id } = req.params
      const response = await AuthorModel.getAuthorById(id)
      res.json(response)
    } catch (e) {
      console.log('Error al obtener el autor requerido.', e)
    }
  }

  // Crear nuevo autor
  static createAuthor = async (req, res) => {
    try {
      const newAuthor = validateAuthor(req.body)
      if (!newAuthor.success) res.json({ message: 'Datos del autor no válidos.' })
      const newAuthorData = {
        ...newAuthor.data
      }
      const response = await AuthorModel.createAuthor(newAuthorData)
      res.json({ message: 'Autor creado exitosamente.', response, newAuthorData })
    } catch (e) {
      console.log('Error al crear autor.', e)
    }
  }

  // Borrar un autor por ID
  static deleteAuthor = async (req, res) => {
    try {
      const { id } = req.params
      const response = await AuthorModel.deleteAuthor(id)
      res.json({ message: 'Autor borrado exitosamente.', response })
    } catch (e) {
      console.log('Error al borrar autor.', e)
    }
  }

  // Editar un autor por ID
  static updateAuthor = async (req, res) => {
    try {
      const author = validateAuthor(req.body)
      if (!author.success) res.json({ message: 'Datos del autor no válidos.' })
      const { id } = req.params
      const authorData = {
        ...author.data
      }
      const response = await AuthorModel.updateAuthor(id, authorData)
      res.json({ message: 'Autor modificado exitosamente.', response })
    } catch (e) {
      console.log('Error al editar autor.', e)
    }
  }
}
