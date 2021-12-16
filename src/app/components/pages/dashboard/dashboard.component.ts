import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Anuncio } from '../../models/anuncio.interface';
import { MonitoreoService } from '../../monitoreo.service';


import {Chart} from 'node_modules/chart.js';

import Swal from 'sweetalert2'
import { contador } from '../../models/visita.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  anuncios:Anuncio[] = []
  contadores: contador[] = []

  public i;
  public a=0;

  sumar(){
    this.a = this.a+1;
  }


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
    this.obtenerContador();
  //  this.array();
  }
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'doughnut',
      data: {
          datasets: [{
              label: 'Current Vallue',
              data: [this.a, 20, 40, 50],
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              fill: true,
          },
          ],
          labels: ['Registros', 'February 2019', 'March 2019', 'April 2019']
      },
  });
  }

 // array(){
  //  var i;
  //  for(i=0;i<this.anuncios.length;i++){
   //   this.a = i;
   // }
 // }

  

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

  obtenerContador(){
    this.monitoreoService.obtenerContador().subscribe( data=> {
      this.contadores = [];
      data.forEach((element:any) => {
        this.contadores.push({
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
