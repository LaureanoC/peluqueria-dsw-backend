import { Request, Response, NextFunction } from 'express'
import { Usuario } from './usuario.entity.js'
import { orm } from '../shared/db/orm.js'

const em = orm.em

function sanitizeUsuarioInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.body.sanitizedInput = {
    dni: req.body.dni,
    nombre: req.body.nombre,
    mail: req.body.mail,
    contraseña: req.body.contraseña,
    telefono: req.body.telefono,
  }
  //more checks here

  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key]
    }
  })
  next()
}

async function findAll(req: Request, res: Response) {
  try {
    const usuarios = await em.find(
      Usuario,
      {},
    )
    res.status(200).json({ message: 'Encontrados todos los usuarioss', data: usuarios })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = req.params.id
    const usuario = await em.findOneOrFail(
      Usuario,
      { id },
    )
    res.status(200).json({ message: 'Usuario encontrado', data: usuario })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function add(req: Request, res: Response) {
  try {
    const usuario = em.create(Usuario, req.body.sanitizedInput)
    await em.flush()
    res.status(201).json({ message: 'Usuario creado', data: usuario })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = req.params.id
    const usuarioToUpdate = await em.findOneOrFail(Usuario, { id })
    em.assign(usuarioToUpdate, req.body.sanitizedInput)
    await em.flush()
    res
      .status(200)
      .json({ message: 'Usuario actualizado', data: usuarioToUpdate })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id
    const usuario = em.getReference(Usuario, id)
    await em.removeAndFlush(usuario)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export {sanitizeUsuarioInput, findAll, findOne, add, update, remove}