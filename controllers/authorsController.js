import { AuthorModel } from '../models/authorModel.js'

export class AuthorsController {
  // Obtener todos los autores
  static getAllAuthors = async (req, res) => {
    const response = await AuthorModel.getAllAuthors()
    res.json(response)
  }

  // Obtener autor por ID
  static getAuthorById = async (req, res) => {
    const { id } = req.params
    const response = await AuthorModel.getAuthorById(id)
    res.json(response)
  }

  // Crear nuevo autor
  static createAuthor = async (req, res) => {
    const newAuthorData = {
      ...req.body
    }
    const response = await AuthorModel.createAuthor(newAuthorData)
    res.json({ message: 'Autor creado exitosamente.', response, newAuthorData })
  }

  // Borrar un autor por ID
  static deleteAuthor = async (req, res) => {
    const { id } = req.params
    const response = await AuthorModel.deleteAuthor(id)
    res.json({ message: 'Autor borrado exitosamente.', response })
  }

  // Editar un autor por ID
  static updateAuthor = async (req, res) => {
    const { id } = req.params
    const authorData = {
      ...req.body
    }
    const response = await AuthorModel.updateAuthor(id, authorData)
    res.json({ message: 'Autor modificado exitosamente.', response })
  }
}
