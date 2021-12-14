import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Anuncio } from '../../models/anuncio.interface';
import { MonitoreoService } from '../../monitoreo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  anuncios:Anuncio[] = []


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

}
