import { contador } from './models/visita.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Anuncio } from './models/anuncio.interface';
import { Observable } from 'rxjs';
import { Ingreso } from './models/ingreso.interface';

@Injectable({
  providedIn: 'root'
})
export class MonitoreoService {

  estado : string = 'Pendiente';

  private anunciosCollection : AngularFirestoreCollection<Anuncio>;
  private ingresosCollection: AngularFirestoreCollection<Ingreso>;
  private anunciosTempCollection: AngularFirestoreCollection<Anuncio>;
  private ingresosTempCollection: AngularFirestoreCollection<Ingreso>;
  private contadores: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { 
    this.anunciosCollection      = afs.collection<Anuncio>('Anuncios');
    this.ingresosCollection      = afs.collection<Ingreso>('Ingresos');
    this.anunciosTempCollection  = afs.collection<Anuncio>('AnunciosTemp');
    this.ingresosTempCollection  = afs.collection<Ingreso>('IngresosTemp');
    this.contadores              = afs.collection<contador>('contadores');
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

  guardarIngresoTemp(ingreso: Ingreso){
    const ingresoObj = {
      nombre: ingreso.nombre,
      apellido: ingreso.apellido,
      genero: ingreso.genero,
      area: ingreso.area,
      jornada: ingreso.jornada,
      comentarios: ingreso.comentarios,
      fecha_creado: new Date()
    };
    return this.ingresosTempCollection.add(ingresoObj);
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

  registrarAnuncioTemp(anuncio: Anuncio){
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
    return this.anunciosTempCollection.add(anuncioObj);
  }

  obtenerContador(){
    return this.afs.collection('Contadores').snapshotChanges();
  }

  obtenerAnuncios(){
    return this.afs.collection('Anuncios').snapshotChanges();
  }

  obtenerIngresos(){
    return this.afs.collection('Ingresos').snapshotChanges();
  }

  obtenerAnunciosTemp(){
    return this.afs.collection('AnunciosTemp').snapshotChanges();
  }

  obtenerIngresosTemp(){
    return this.afs.collection('IngresosTemp').snapshotChanges();
  }


  deleteAnuncio(anuncio: Anuncio){
    return this.anunciosCollection.doc(anuncio.id).delete();
  }

  deleteIngreso(ingreso: Ingreso){
    return this.ingresosCollection.doc(ingreso.id).delete();
  }

}
