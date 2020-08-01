import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import {


} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Alumno } from '../modelo/alumno';
import { Estatus } from '../modelo/estatus';
import { Globales } from '../modelo/globales';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { Profesor } from '../modelo/profesor';
import { Materia } from '../modelo/materia';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {
  public form: FormGroup;
  estatus:Estatus={}
  alumno:Alumno={}
  profesor:Profesor={}
  cargando:boolean
  cargando2:boolean
  cargandoClaveProfesor:boolean
  estatusClaveProfesor:Estatus={}
  miClaveProfesor = false
  mimateria:Materia={}
  errorsito:boolean
  email:string
estaRegistrando:boolean
 //Para ocultar mostrar password
 hide=true
  miClaveLibro:string

  listaGrupos: string[] = [];
  listaPlanteles: number[] = [
    1,
    2,
    3,
    4,
    5,
    6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
   

  ];
  listaTurnos: string[] = [
    'Matutino',
    'Vespertino',
'Mixto'
  ];


  constructor(private fb: FormBuilder, private http: HttpClient) { }
  ngOnInit() {
    this.form = this.fb.group({
      codigolibro: [
        null,
        Validators.compose([
          Validators.required,

        ])
      ],
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ]
      ,
      nombre: [
        null,
        Validators.compose([Validators.required, /*CustomValidators.url*/])
      ],
      usuario: [
        null,
        Validators.compose([Validators.required])
      ],
      paterno: [
        null,
        Validators.compose([Validators.required])
      ],
      materno: [
        null,
        Validators.compose([Validators.required])
      ],
      claveprofesor: [
        null,
        Validators.compose([Validators.required])
      ],
      planteles: [
        null,
        Validators.compose([Validators.required])
      ],
      turnos: [
        null,
        Validators.compose([Validators.required])
      ],
      grupos: [
        null,
        Validators.compose([Validators.required])
      ],
      

      /*gender: [null, Validators.required],*/
      password: password,
      confirmPassword: confirmPassword
    });


  }


  dejandoCodigo(){
    this.cargando=true

    //Checamos si  existe la clave de profesor



this.http.get(Globales.urlBase+"/clave/"+this.form.get('codigolibro').value, ).subscribe(
  res=>{
    console.log("Reespuesta objenida...")
    this.estatus=res
    //this.miClave=this.estatus.success
   // console.log("este que es"+this.miClave)
    this.cargando=false




  }
)
 
//Ajustamos la clave del libro
this.miClaveLibro=this.form.get('codigolibro').value
  
    console.log("Adioooos...");
  }

dejandoCorreo(){
  this.cargando2=true
if(this.email.includes("gmail.com")){
  console.log("e mail"+this.email)
  this.errorsito=true
  this.cargando2=false
}else{
  this.errorsito=false
  this.cargando2=false
}
  
  

  
}
  dejandoClaveProfesor() {
    console.log("Entrando a clave profesor...")
    this.cargandoClaveProfesor = true

    //Checamos si  existe la clave de profesor

    this.http.get<Estatus>(Globales.urlBase + "/profesor-alumno/" + this.form.get('claveprofesor').value).subscribe(
      res => {
        console.log("Reespuesta objenida...")
        this.estatusClaveProfesor = res
        this.miClaveProfesor = this.estatusClaveProfesor.success
         this.profesor=this.estatusClaveProfesor.profesor;
        console.log("Profesor correcto" + this.miClaveProfesor+"  ..."+JSON.stringify(this.profesor))
        this.cargandoClaveProfesor = false
      

        //Poblamos el conbobox
        //Obtenemos la clave del chamaco
        if(this.miClaveLibro.includes("INF1")||this.miClaveLibro.includes("inf1")){
          console.log("Primer ciclo")
          this.mimateria.nombre="Informática 1"

        }if(this.miClaveLibro.includes("INF2")||this.miClaveLibro.includes("inf2")){
          console.log("Segundo ciclo")
          this.mimateria.nombre="Informática 2"
          console.log("materia nombre "+this.mimateria.nombre)

        }if(this.miClaveLibro.includes("INF3") ||this.miClaveLibro.includes("inf3")){
          console.log("Tercer ciclo")
          this.mimateria.nombre="Informática 3"

        }if(this.miClaveLibro.includes("INF4")||this.miClaveLibro.includes("inf4")){
          this.mimateria.nombre="Informática 4"
          console.log("Cuarto ciclo")

        }

        if(this.miClaveLibro.includes("LYC1")||this.miClaveLibro.includes("lyc1")){
          console.log("Primer ciclo")
          this.mimateria.nombre="Lenguajes y comunicación 1"

        }if(this.miClaveLibro.includes("LYC2")||this.miClaveLibro.includes("lyc2")){
          console.log("Segundo ciclo")
          this.mimateria.nombre="Lenguajes y comunicación 2"
          console.log("materia nombre "+this.mimateria.nombre)

        }
        if(this.miClaveLibro.includes("TAT2")||this.miClaveLibro.includes("tat2")){
          console.log("Segundo ciclo")
          this.mimateria.nombre="Taller de análisis de textos 2"
          console.log("materia nombre "+this.mimateria.nombre)

        }

        if(this.miClaveLibro.includes("TAT1")||this.miClaveLibro.includes("tat1")){
          console.log("Primer ciclo")
          this.mimateria.nombre="Taller de análisis de textos 1"
          console.log("materia nombre "+this.mimateria.nombre)

        }
        if(this.miClaveLibro.includes("LIT1")||this.miClaveLibro.includes("lit1")){
          console.log("Primer ciclo")
          this.mimateria.nombre="Literatura 1"
          console.log("materia nombre "+this.mimateria.nombre)

        }
        if(this.miClaveLibro.includes("LIT2")||this.miClaveLibro.includes("lit2")){
          console.log("Segundo ciclo")
          this.mimateria.nombre="Literatura 2"
          console.log("materia nombre "+this.mimateria.nombre)

        }

  console.log("Mi materia "+this.mimateria.nombre)
        //Buscamos la materia y asignamos los grupos
        console.log("El profesor es de estos grupos "+JSON.stringify(this.profesor));
       this.mimateria= this.profesor.materias.find( materia => materia.nombre === this.mimateria.nombre)
   console.log("Los gurupos "+JSON.stringify(this.mimateria.grupos));
   this.listaGrupos=this.mimateria.grupos
   console.log("Los grupos a visualizarse son "+JSON.stringify(this.listaGrupos))


        
      }
    )


    console.log("Adioooos...");
  }

  //Registrar Alumno

  registrarAlumno() {
this.estaRegistrando=true;
 
   
    this.alumno = {
      clave: this.form.get('codigolibro').value,
      usuario: this.form.get('usuario').value,
      password: this.form.get('password').value,
      email: this.form.get('email').value,
      nombre: this.form.get('nombre').value,
      paterno: this.form.get('paterno').value,
      materno: this.form.get('materno').value,
      claveProfesor:this.form.get('claveprofesor').value,
      grupo: this.form.get('grupos').value,
      plantel:this.form.get('planteles').value,
      turno: this.form.get('turnos').value,
  



    }

    // Enviamos a http
    this.http.post<Estatus>(Globales.urlBase + "/alumno", this.alumno).subscribe(
      estatus => {
        this.estatus = estatus
        console.log("Ya esta todo bien " + this.estatus.mensaje)

   this.estaRegistrando=false
   
        Swal.fire({
          icon: 'success',
          title: 'Registrado',
          text: this.estatus.mensaje,
          confirmButtonText:'Finalizar',
          footer: '<a href="https://geradmin.herokuapp.com">Ingresar a la plataforma</a>'
        })

         this.limpiar();
      }
    )

  //  console.log("Registra profesor:" + JSON.stringify(this.profesor))


    
  }

  limpiar(){
    this.form.reset()
  }

}
