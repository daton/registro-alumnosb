import { Sistema } from "./sistema";
import { Materia } from "./materia";

export interface Profesor {
  clave?: string;
  usuario?:string
  nombre?: string;
  paterno?: string;
  materno?: string;
  celular?: string;
  telefono?:string;
  plantel?:string;
  turno?: string;
  password?: string;
  email?: string;

  registrado?: string;
  area?:string
  materias?: Materia[];
  sistema?: Sistema;
}
