import { connectDB } from '../config/db.js'

export class BookModel {
  // Obtener todos los libros
  static getAllBooks = async () => {
    const db = await connectDB()
    const query = 'SELECT * FROM books;'
    const [results] = await db.query(query)
    return results
  }

  // Obtener libro por ID
  static getBookById = async (id) => {
    const db = await connectDB()
    const query = 'SELECT * FROM books WHERE id = ?;'
    const [result] = await db.query(query, [id])
    return result
  }

  // Crear un libro
  static createBook = async (bookData) => {
    const db = await connectDB()
    const query = 'INSERT INTO books (title, book_desc, image_url, author_id, genre_id) VALUES (?, ?, ?, ?, ?);'
    const [result] = await db.query(query, [bookData.title, bookData.book_desc, bookData.image_url, bookData.author_id, bookData.genre_id])
    return result
  }

  // Borrar libro por ID
  static deleteBook = async (id) => {
    const db = await connectDB()
    const query = 'DELETE FROM books WHERE id = ?;'
    const [result] = await db.query(query, [id])
    return result
  }

  // Editar libro por ID
  static updateBook = async (id, bookData) => {
    const db = await connectDB()
    const query = 'UPDATE books SET title = ?, book_desc = ?, image_url = ?, author_id = ?, genre_id = ? WHERE id = ?;'
    const [result] = await db.query(query, [bookData.title, bookData.book_desc, bookData.image_url, bookData.author_id, bookData.genre_id, id])
    return result
  }
}
