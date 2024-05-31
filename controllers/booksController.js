import { BookModel } from '../models/bookModel.js'
import { validateBook, validatePartialBook } from '../schemas/bookSchema.js'

export class BooksController {
  // Obtener todos los libros
  static getAllBooks = async (req, res) => {
    try {
      const response = await BookModel.getAllBooks()
      res.json(response)
    } catch (e) {
      console.log('Error al obtener todos los libros.', e)
    }
  }

  // Obtener libro por ID
  static getBookById = async (req, res) => {
    try {
      const { id } = req.params
      const response = await BookModel.getBookById(id)
      res.json(response)
    } catch (e) {
      console.log('Error al obtener el libro requerido.', e)
    }
  }

  // Crear nuevo libro
  static createBook = async (req, res) => {
    try {
      const newBook = validateBook(req.body)
      if (!newBook.success) res.json({ message: 'Datos del libro no válidos.' })
      const newBookData = {
        ...newBook.data
      }
      const response = await BookModel.createBook(newBookData)
      res.json({ message: 'Libro creado exitosamente.', response, newBookData })
    } catch (e) {
      console.log('Error al crear libro.', e)
    }
  }

  // Borrar un libro por ID
  static deleteBook = async (req, res) => {
    try {
      const { id } = await req.params
      const response = await BookModel.deleteBook(id)
      res.json({ message: 'Libro borrado exitosamente.', response })
    } catch (e) {
      console.log('Error al borrar libro.', e)
    }
  }

  // Editar un libro por ID
  static updateBook = async (req, res) => {
    try {
      const { id } = req.params
      const bookToEdit = await BookModel.getBookById(id)
      console.log('bookToEdit:', bookToEdit)
      const book = validatePartialBook(req.body)
      console.log('book:', book)
      if (!book.success) res.json({ message: 'Datos del libro no válidos.' })
      const bookData = {
        ...bookToEdit[0],
        ...book.data
      }
      console.log('finalBook:', bookData)
      const response = await BookModel.updateBook(id, bookData)
      res.json({ message: 'Libro modificado exitosamente.', response })
    } catch (e) {
      console.log('Error al editar libro.', e)
    }
  }
}
