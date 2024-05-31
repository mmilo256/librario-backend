import { connectDB } from '../config/db.js'

export class GenreModel {
  // Obtener todos los géneros
  static getAllGenres = async () => {
    const db = await connectDB()
    const query = 'SELECT * FROM genres;'
    const [results] = await db.query(query)
    return results
  }

  // Obtener género por ID
  static getGenreById = async (id) => {
    const db = await connectDB()
    const query = 'SELECT * FROM genres WHERE id = ?;'
    const [result] = await db.query(query, [id])
    return result
  }

  // Crear un género
  static createGenre = async (genreData) => {
    const db = await connectDB()
    const query = 'INSERT INTO genres (genre) VALUES (?);'
    const [result] = await db.query(query, [genreData.genre])
    return result
  }

  // Borrar género por ID
  static deleteGenre = async (id) => {
    const db = await connectDB()
    const query = 'DELETE FROM genres WHERE id = ?;'
    const [result] = await db.query(query, [id])
    return result
  }

  // Editar género por ID
  static updateGenre = async (id, genreData) => {
    const db = await connectDB()
    const query = 'UPDATE genres SET genre = ? WHERE id = ?;'
    const [result] = await db.query(query, [genreData.genre, id])
    return result
  }
}
