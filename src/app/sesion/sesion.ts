export class Sesion {
  id: string;
  user: string;
  contrasena: string;

  constructor(
    id: string,
    user: string,
    contrasena: string,
  ) {
    this.id = id;
    this.user = user;
    this.contrasena = contrasena;
  }
}
