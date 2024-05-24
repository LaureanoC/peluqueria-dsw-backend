import express, { NextFunction, Request, Response } from 'express'
import { Usuario } from './usuario.js'
import { it } from 'node:test'

const app = express()
app.use(express.json())

const usuarios = [
  new Usuario(
    30199820,
    'Laureano Fernández',
    'laureanofernandez98@gmail.com',
    'CSFTMRJO##',
    5493415802992,
    'cliente',
  ),
]

function sanitizeUsuarioInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    dni: req.body.dni,
    nombre: req.body.nombre,
    mail: req.body.mail,
    contraseña: req.body.contraseña,
    telefono: req.body.telefono,
    tipo: req.body.tipo,
  }
  //more checks here

  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key]
    }
  })
  next()
}

app.get('/api/usuarios', (req, res) => {
  res.json({ data: usuarios })
})

app.get('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find((usuario) => usuario.id === req.params.id)
  if (!usuario) {
    return res.status(404).send({ message: 'Usuario no encontrado' })
  }
  res.json({ data: usuario })
})

app.post('/api/usuarios', sanitizeUsuarioInput, (req, res) => {
  const input = req.body.sanitizedInput

  const usuario = new Usuario(
    input.dni,
    input.nombre,
    input.mail,
    input.contraseña,
    input.telefono,
    input.tipo,
  )

  usuarios.push(usuario)
  return res.status(201).send({ message: 'Usuario registrado', data: usuario })
})

app.put('/api/usuarios/:id', sanitizeUsuarioInput, (req, res) => {
  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === req.params.id)

  if (usuarioIndex === -1) {
    return res.status(404).send({ message:'Usuario no encontrado'})
  }

  usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...req.body.sanitizedInput }

  return res.status(200).send({ message: 'Usuario actualizado correctamente', data: usuarios[usuarioIndex] })
})

app.patch('/api/usuarios/:id', sanitizeUsuarioInput, (req, res) => {
  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === req.params.id)

  if (usuarioIndex === -1) {
    return res.status(404).send({ message: 'Usuario no encontrado'})
  }

  Object.assign(usuarios[usuarioIndex], req.body.sanitizedInput)

  return res.status(200).send({ message: 'Usuario actualizado correctamente', data: usuarios[usuarioIndex] })
})

app.delete('/api/usuarios/:id', (req, res) => {
  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === req.params.id)

  if (usuarioIndex === -1) {
    res.status(404).send({ message:'Usuario no encontrado'})
  } else {
    usuarios.splice(usuarioIndex, 1)
    res.status(200).send({ message:'Usuario eliminado correctamente'})
  }
})

app.use((_, res) => {
  return res.status(404).send({ message:'Recurso no encontrado'})
})
app.listen(3000, () =>{
    console.log('Server running on http://localhost:3000/')
})