import crypto from 'crypto'

export class Usuario {
  constructor(
    public id = crypto.randomUUID(),
    public nombre: string,
    public mail: string,
    public password: string,
    public telefono: string,
    public tipo: string,

  ) {}
}