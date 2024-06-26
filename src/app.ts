import express from 'express'
import { usuarioRouter } from './usuarios/usuario.routes.js'

const app = express()
app.use(express.json())

app.use('/api/usuarios', usuarioRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})