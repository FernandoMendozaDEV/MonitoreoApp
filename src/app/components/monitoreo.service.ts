import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Instalacion } from './models/instalacion.interface';
import { Visita } from './models/visita.interface';
import { Retiro } from './models/retiro.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoreoService {

  estado : string = 'Pendiente';

  private instalacionesCollection: AngularFirestoreCollection<Instalacion>;
  private visitasCollection: AngularFirestoreCollection<Visita>;
  private retirosCollection: AngularFirestoreCollection<Retiro>;

  constructor(private afs: AngularFirestore) { 

    this.instalacionesCollection = afs.collection<Instalacion>('Instalaciones');
    this.visitasCollection       = afs.collection<Visita>('Visitas');
    this.retirosCollection       = afs.collection<Retiro>('Retiros');

  }

  guardarNuevaInstalacion(instalacion: Instalacion){
    const instalacionObj = {
      nContrato   :  instalacion.nContrato,
      identidad   :  instalacion.identidad,
      direccionIP :  instalacion.direccionIP,
      cliente     :  instalacion.cliente,
      departamento: instalacion.departamento,
      telefono    :  instalacion.telefono,
      direccion   :  instalacion.direccion,
      estado      :  this.estado,
      equipos_asignados: instalacion.equipos_asignados,
      comentarios :  instalacion.comentarios,
      //creado      :  instalacion.creado,
      fecha_creado: new Date()
    };
    return this.instalacionesCollection.add(instalacionObj);
  }

  obtenerInstalaciones(){
    return this.afs.collection('Instalaciones').snapshotChanges();
  }

  public verInstalacion(id: Instalacion): Observable<Instalacion>{
    return this.afs.doc<Instalacion>(`Instalaciones/${id}`).valueChanges();
  }



}
