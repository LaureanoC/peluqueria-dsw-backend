import { Repository } from "../shared/repository.js"
import { Usuario } from "./usuario.entity.js"

const usuarios = [
    new Usuario(
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad',
        'Laureano',
        'laureano@gmail.com',
        '123',
        '2478515151',
        'cliente'
    ),
]

export class UsuarioRepository implements Repository<Usuario>{

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
          const usuarioEliminado = usuarios[usuarioIndex]
          usuarios.splice(usuarioIndex, 1)
          return usuarioEliminado
    }
    }

}
