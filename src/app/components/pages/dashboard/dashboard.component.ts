import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Anuncio } from '../../models/anuncio.interface';
import { MonitoreoService } from '../../monitoreo.service';


import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  anuncios:Anuncio[] = []
  public i;

  constructor( private monitoreoService : MonitoreoService) { }

  public nuevoAnuncio = new FormGroup({
    identidad  : new FormControl('', Validators.required),
    nombre    : new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    empresa  : new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    encargado    : new FormControl('', Validators.required),
    comentarios: new FormControl('', Validators.required),
    fecha_creado: new FormControl(),
  })

  ngOnInit() {
    this.obtenerAnuncios();
  }

  array(){
    
    var i;
    for(i=0;i<this.anuncios.length;i++){
    }

    this.i = i;
  }

  agregarNuevoAnuncio(anuncio: Anuncio){
    this.monitoreoService.registrarAnuncio(anuncio);
    console.log('Di un click');
  }
   
  obtenerAnuncios(){
    this.monitoreoService.obtenerAnuncios().subscribe( data=> {
      this.anuncios = [];
      data.forEach((element:any) => {
        this.anuncios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

  eliminarAnuncio(anuncio: Anuncio){
    Swal.fire({
      title: 'Registrar ingreso',
      text: "Persona anunciada se presentó?",
      icon: 'warning',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, registrar ingreso',
      cancelButtonText: 'No'
      
      
      }).then((result) => {
        if (result.isConfirmed) {
            this.monitoreoService.deleteAnuncio(anuncio);
            this.monitoreoService.registrarAnuncioTemp(anuncio);
          Swal.fire(
            'Persona ingresada!',
            'La persona fue ingresada correctamente',
            'success'
          )
        } else {
            this.monitoreoService.deleteAnuncio(anuncio);
          Swal.fire(
            'Anuncio Eliminado!',
            'La persona no se presentó',
            'success'
          )
        }
      })
  }

}
