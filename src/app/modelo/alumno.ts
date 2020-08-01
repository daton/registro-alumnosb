import {Plantel} from './plantel';
import {Materia} from './materia';
import {Examen} from './examen';
export interface Alumno {
    indice?:number
    id?:string
    nombreCompleto?:string
    usuario?:string
 clave?:string;
nombre?:string;
 paterno?:string;
 materno?:string;
 celular?:string;
 grupo?:string;
 plantel?:number
 turno?:string;
 date?:string
password?:string;
 email?:string;
 claveProfesor?:String;
 fecha?:string
 examenes?:Examen[]

    
}
