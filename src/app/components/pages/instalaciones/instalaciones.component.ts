import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Instalacion } from '../../models/instalacion.interface';
import { MonitoreoService } from '../../monitoreo.service';


@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.scss']
})
export class InstalacionesComponent implements OnInit {

  instalaciones: Instalacion[] = [];

  constructor(private monitoreoService: MonitoreoService) { }

  public nuevaInstalacion = new FormGroup({
    nContrato   : new FormControl('', Validators.required),
    identidad  : new FormControl('', Validators.required),
    cliente    : new FormControl('', Validators.required),
    direccionIP: new FormControl('', Validators.required),
    direccion  : new FormControl('', Validators.required),
    departamento: new FormControl('', Validators.required),
    telefono    : new FormControl('', Validators.required),
    
    equipos_asignados: new FormControl('', Validators.required),
    comentarios : new FormControl('', Validators.required),
   // creado      : new FormControl('', Validators.required),
    fecha_creado: new FormControl(),
  })

  ngOnInit(){
    this.obtenerInstalaciones();
  }

  agregarNuevaInstalacion(instalacion: Instalacion){
    this.monitoreoService.guardarNuevaInstalacion(instalacion);
    console.log('Di un click');
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
