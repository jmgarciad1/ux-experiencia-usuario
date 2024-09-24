export class Ringtone {
  id: string;
  name: string;
  description: string;
  filerington: string;
  status: string;

  constructor(
    id: string,
    name: string,
    description: string,
    filerington: string,
    status: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.filerington = filerington;
    this.status = status;
  }
}
