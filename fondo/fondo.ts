export class Fondo {
  id: string;
  name: string;
  description: string;
  filefondo: string;
  status: string;

  constructor(
    id: string,
    name: string,
    description: string,
    filefondo: string,
    status: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.filefondo = filefondo;
    this.status = status;
  }
}
