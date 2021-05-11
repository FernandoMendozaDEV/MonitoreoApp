import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//COMPONENTES CREADOS
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { InstalacionesComponent } from './components/pages/instalaciones/instalaciones.component';
import { VisitasComponent } from './components/pages/visitas/visitas.component';
import { RetirosComponent } from './components/pages/retiros/retiros.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EditInstalacionComponent } from './components/posts/edit-instalacion/edit-instalacion.component';
import { EditVisitaComponent } from './components/posts/edit-visita/edit-visita.component';
import { EditRetiroComponent } from './components/posts/edit-retiro/edit-retiro.component';

//FIREBASE
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage} from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire/';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    ContainerAppComponent,
    DashboardComponent,
    InstalacionesComponent,
    VisitasComponent,
    RetirosComponent,
    LoginComponent,
    EditInstalacionComponent,
    EditVisitaComponent,
    EditRetiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
