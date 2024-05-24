import crypto from 'node:crypto';
export class Usuario {
    constructor(dni, nombre, mail, password, telefono, tipo, id = crypto.randomUUID()) {
        this.dni = dni;
        this.nombre = nombre;
        this.mail = mail;
        this.password = password;
        this.telefono = telefono;
        this.tipo = tipo;
        this.id = id;
    }
}
//# sourceMappingURL=usuario.entity.js.map