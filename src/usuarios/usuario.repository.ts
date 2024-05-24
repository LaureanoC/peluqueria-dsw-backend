import { Repository } from '../shared/repository.js'
import { Usuario } from './usuario.entity.js'

const usuarios = [
  new Usuario(
    '42950000',
    'Laureano',
    'mail@gmail.com',
    'contraseña',
    '2478515858',
    'cliente'
  )
]

export class UsuarioRepository implements Repository<Usuario> {
  public findAll(): Usuario[] | undefined {
    return usuarios
  }

  public findOne(item: { id: string }): Usuario | undefined {
    return usuarios.find((usuario) => usuario.id === item.id)
  }

  public add(item: Usuario): Usuario | undefined {
    usuarios.push(item)
    return item
  }

  public update(item: Usuario): Usuario | undefined {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === item.id)

    if (usuarioIndex !== -1) {
      usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...item }
    }
    return usuarios[usuarioIndex]
  }

  public delete(item: { id: string }): Usuario | undefined {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === item.id)

    if (usuarioIndex !== -1) {
      const deletedUsuarios = usuarios[usuarioIndex]
      usuarios.splice(usuarioIndex, 1)
      return deletedUsuarios
    }
  }
}