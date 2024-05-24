import crypto from 'node:crypto'

export class Usuario {
  constructor(
   
    public dni: string,
    public nombre: string,
    public mail: string,
    public password: string,
    public telefono: string,
    public tipo: string,
    public id = crypto.randomUUID(),
    
  ) {}
}