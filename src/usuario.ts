import crypto from 'node:crypto'

export class Usuario {
  constructor(
    public dni: number,
    public nombre: string,
    public mail: string,
    public contraseña: string,
    public telefono: number,
    public id = crypto.randomUUID()
  ) {}
}