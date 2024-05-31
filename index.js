import e from 'express'
import { authorsRouter } from './routes/authorsRouter.js'
import { genresRouter } from './routes/genresRouter.js'
import { booksRouter } from './routes/booksRouter.js'

const app = e()
const port = process.env.PORT ?? 3000
app.disable('x-powered-by')
app.use(e.json())

app.use('/authors', authorsRouter)
app.use('/genres', genresRouter)
app.use('/books', booksRouter)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
