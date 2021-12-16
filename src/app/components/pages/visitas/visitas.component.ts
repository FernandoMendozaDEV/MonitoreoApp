import { Component, OnInit } from '@angular/core';

import { Ingreso } from '../../models/ingreso.interface';
import { Anuncio } from '../../models/anuncio.interface';
import { MonitoreoService } from '../../monitoreo.service';


@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss']
})
export class VisitasComponent implements OnInit {


  ingresos: Ingreso[] = [];
  anuncios: Anuncio[] = [];

  constructor( private monitoreoService: MonitoreoService) { }

  ngOnInit(){
    this.obtenerIngresosTemp();
    this.obtenerAnunciosTemp();
  }

  obtenerIngresosTemp(){
    this.monitoreoService.obtenerIngresosTemp().subscribe( data=> {
      this.ingresos = [];
      data.forEach((element:any) => {
        this.ingresos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

  obtenerAnunciosTemp(){
    this.monitoreoService.obtenerAnunciosTemp().subscribe( data=> {
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
