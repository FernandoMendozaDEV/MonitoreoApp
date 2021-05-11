import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonitoreoService } from '../../monitoreo.service';
import { Observable } from 'rxjs';
import { Instalacion } from '../../models/instalacion.interface';

@Component({
  selector: 'app-edit-instalacion',
  templateUrl: './edit-instalacion.component.html',
  styleUrls: ['./edit-instalacion.component.scss']
})
export class EditInstalacionComponent implements OnInit {

  instalacion: Instalacion;
  id: string;

  constructor(private route: ActivatedRoute,
              private monitoreoService: MonitoreoService) { }

  ngOnInit() {
    //const idPost = this.route.snapshot.params.id;
    //this.instalacion = this.monitoreoService.verInstalacion(idPost);
    this.route.params
    .subscribe( parametros => {
      this.monitoreoService.verInstalacion(parametros['id'])
      .subscribe( (instalacion: Instalacion) => {
        this.id = parametros['id'];
        this.instalacion = instalacion;
      });
    })
  }

}
