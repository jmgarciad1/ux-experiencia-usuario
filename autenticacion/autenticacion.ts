export class Autenticacion {
  id: string;
  code: string;

  constructor(
    id: string,
    code: string,
  ) {
    this.id = id;
    this.code = code;
  }
}
