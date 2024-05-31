import { connectDB } from '../config/db.js'

export class AuthorModel {
  // Obtener todos los autores
  static getAllAuthors = async () => {
    const db = await connectDB()
    const query = 'SELECT * FROM authors;'
    const [results] = await db.query(query)
    return results
  }

  // Obtener autor por ID
  static getAuthorById = async (id) => {
    const db = await connectDB()
    const query = 'SELECT * FROM authors WHERE id = ?;'
    const [result] = await db.query(query, [id])
    return result
  }

  // Crear un autor
  static createAuthor = async (authorData) => {
    const db = await connectDB()
    const query = 'INSERT INTO authors (author_name) VALUES (?);'
    const [result] = await db.query(query, [authorData.author_name])
    return result
  }

  // Borrar autor por ID
  static deleteAuthor = async (id) => {
    const db = await connectDB()
    const query = 'DELETE FROM authors WHERE id = ?;'
    const [result] = await db.query(query, [id])
    return result
  }

  // Editar autor por ID
  static updateAuthor = async (id, authorData) => {
    const db = await connectDB()
    const query = 'UPDATE authors SET author_name = ? WHERE id = ?;'
    const [result] = await db.query(query, [authorData.author_name, id])
    return result
  }
}
