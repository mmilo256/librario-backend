import e from 'express'
import { authorsRouter } from './routes/authorsRouter.js'

const app = e()
const port = process.env.PORT ?? 3000
app.disable('x-powered-by')
app.use(e.json())

app.use('/authors', authorsRouter)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
