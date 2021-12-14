import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Anuncio } from './models/anuncio.interface';
import { Instalacion } from './models/instalacion.interface';
import { Visita } from './models/visita.interface';
import { Retiro } from './models/retiro.interface';
import { Observable } from 'rxjs';
import { Ingreso } from './models/ingreso.interface';

@Injectable({
  providedIn: 'root'
})
export class MonitoreoService {

  estado : string = 'Pendiente';

  private instalacionesCollection: AngularFirestoreCollection<Instalacion>;
  private visitasCollection: AngularFirestoreCollection<Visita>;
  private retirosCollection: AngularFirestoreCollection<Retiro>;
  private anunciosCollection : AngularFirestoreCollection<Anuncio>;
  private ingresosCollection: AngularFirestoreCollection<Ingreso>;

  constructor(private afs: AngularFirestore) { 

    this.instalacionesCollection = afs.collection<Instalacion>('Instalaciones');
    this.visitasCollection       = afs.collection<Visita>('Visitas');
    this.retirosCollection       = afs.collection<Retiro>('Retiros');
    this.anunciosCollection      = afs.collection<Anuncio>('Anuncios');
    this.ingresosCollection      =afs.collection<Ingreso>('Ingresos')

  }

  guardarNuevoIngreso(ingreso: Ingreso){
    const ingresoObj = {
      nombre: ingreso.nombre,
      apellido: ingreso.apellido,
      genero: ingreso.genero,
      area: ingreso.area,
      jornada: ingreso.jornada,
      comentarios: ingreso.comentarios,
      fecha_creado: new Date()
    };
    return this.ingresosCollection.add(ingresoObj);
  }

  registrarAnuncio(anuncio: Anuncio){
    const anuncioObj = {
      identidad   :  anuncio.identidad,
      nombre : anuncio.nombre,
      apellido: anuncio.apellido,
      empresa: anuncio.empresa,
      area: anuncio.area,
      encargado: anuncio.encargado,
      comentarios: anuncio.comentarios,
      fecha_creado: new Date()
    };
    return this.anunciosCollection.add(anuncioObj);
  }

  obtenerAnuncios(){
    return this.afs.collection('Anuncios').snapshotChanges();
  }



  obtenerInstalaciones(){
    return this.afs.collection('Instalaciones').snapshotChanges();
  }

  public verInstalacion(id: Instalacion): Observable<Instalacion>{
    return this.afs.doc<Instalacion>(`Instalaciones/${id}`).valueChanges();
  }



}
