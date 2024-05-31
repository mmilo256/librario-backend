import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'librarydb'
}

let conn

export const connectDB = async () => {
  if (!conn) {
    try {
      conn = await mysql.createConnection(config)
      console.log('Conectado a la base de datos.')
    } catch (e) {
      console.log('Error al conectarse a la base de datos.', e)
    }
  }
  return conn
}
