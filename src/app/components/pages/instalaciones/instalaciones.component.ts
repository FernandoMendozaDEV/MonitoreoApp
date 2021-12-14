import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Instalacion } from '../../models/instalacion.interface';
import { Ingreso } from '../../models/ingreso.interface';
import { MonitoreoService } from '../../monitoreo.service';


@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.scss']
})
export class InstalacionesComponent implements OnInit {

  instalaciones: Instalacion[] = [];

  ingreso: Ingreso[] = [];

  constructor(private monitoreoService: MonitoreoService) { }

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
    this.obtenerInstalaciones();
  }

  agregarNuevoIngreso(ingreso: Ingreso){
    this.monitoreoService.guardarNuevoIngreso(ingreso);
  }

  obtenerInstalaciones(){
    this.monitoreoService.obtenerInstalaciones().subscribe( data=> {
      this.instalaciones = [];
      data.forEach((element:any) => {
        this.instalaciones.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }



}
