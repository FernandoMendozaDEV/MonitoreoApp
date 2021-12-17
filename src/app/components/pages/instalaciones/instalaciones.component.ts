import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Instalacion } from '../../models/instalacion.interface';
import { Ingreso } from '../../models/ingreso.interface';
import { MonitoreoService } from '../../monitoreo.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.scss']
})
export class InstalacionesComponent implements OnInit {

  filterIngreso: any = '';

  ingresos: Ingreso[] = [];

  constructor(public monitoreoService: MonitoreoService) { }

  public nuevoIngreso = new FormGroup({
    nombre   : new FormControl('', Validators.required),
    apellido  : new FormControl('', Validators.required),
    genero    : new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    jornada  : new FormControl('', Validators.required),
    comentarios: new FormControl('', Validators.required),
    fecha_creado: new FormControl(),
  })

  ngOnInit(){
    this.obtenerIngresos();
  }

  agregarNuevoIngreso(ingreso: Ingreso){
    this.monitoreoService.guardarNuevoIngreso(ingreso);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Nuevo ingreso guardado exitosamente!',
      showConfirmButton: false,
      timer: 1500
    })
    
  }

  obtenerIngresos(){
    this.monitoreoService.obtenerIngresos().subscribe( data=> {
      this.ingresos = [];
      data.forEach((element:any) => {
        this.ingresos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }
  
  eliminarIngreso(ingreso: Ingreso){
    
      this.monitoreoService.deleteIngreso(ingreso);
      this.monitoreoService.guardarIngresoTemp(ingreso);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Persona salió',
        showConfirmButton: false,
        timer: 1500
      })
  
  }



}
