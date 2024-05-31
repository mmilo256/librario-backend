import e from 'express'
import { authorsRouter } from './routes/authorsRouter.js'
import { genresRouter } from './routes/genresRouter.js'

const app = e()
const port = process.env.PORT ?? 3000
app.disable('x-powered-by')
app.use(e.json())

app.use('/authors', authorsRouter)
app.use('/genres', genresRouter)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
