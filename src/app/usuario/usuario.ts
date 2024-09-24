export class Usuario {
  id: string;
  name: string;
  email: string;
  user: string;
  contrasena: string;

  constructor(
    id: string,
    name: string,
    email: string,
    user: string,
    contrasena: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.user = user;
    this.contrasena = contrasena;
  }
}
