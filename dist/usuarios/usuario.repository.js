import { Usuario } from './usuario.entity.js';
const usuarios = [
    new Usuario(30199820, 'Laureano Fernández', 'laureanofernandez98@gmail.com', 'CSFTMRJO##', 5493415802992, 'cliente'),
];
export class UsuarioRepository {
    findAll() {
        return usuarios;
    }
    findOne(item) {
        return usuarios.find((usuario) => usuario.id === item.id);
    }
    add(item) {
        usuarios.push(item);
        return item;
    }
    update(item) {
        const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === item.id);
        if (usuarioIndex !== -1) {
            usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...item };
        }
        return usuarios[usuarioIndex];
    }
    delete(item) {
        const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === item.id);
        if (usuarioIndex !== -1) {
            const deletedUsuarios = usuarios[usuarioIndex];
            usuarios.splice(usuarioIndex, 1);
            return deletedUsuarios;
        }
    }
}
//# sourceMappingURL=usuario.repository.js.map