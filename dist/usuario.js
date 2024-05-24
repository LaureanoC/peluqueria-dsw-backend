import crypto from 'node:crypto';
export class Usuario {
    constructor(dni, nombre, mail, contraseña, telefono, tipo, id = crypto.randomUUID()) {
        this.dni = dni;
        this.nombre = nombre;
        this.mail = mail;
        this.contraseña = contraseña;
        this.telefono = telefono;
        this.tipo = tipo;
        this.id = id;
    }
}
//# sourceMappingURL=usuario.js.map