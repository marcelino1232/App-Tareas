import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareasComponent {
  
   listTareas:Tarea[] = [];
   nombreTarea = '';

  AgregarTarea(){

  console.log(this.nombreTarea);
   const tarea:Tarea = {
    nombre:this.nombreTarea,
    estado:false
   };

   this.listTareas.push(tarea);
   this.nombreTarea = '';
  }
  
}
