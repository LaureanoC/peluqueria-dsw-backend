import crypto from 'node:crypto';
export class Usuario {
    constructor(dni, nombre, mail, contraseña, telefono, id = crypto.randomUUID()) {
        this.dni = dni;
        this.nombre = nombre;
        this.mail = mail;
        this.contraseña = contraseña;
        this.telefono = telefono;
        this.id = id;
    }
}
//# sourceMappingURL=usuario.entity.js.map