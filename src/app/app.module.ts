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

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    ContainerAppComponent,
    DashboardComponent,
    InstalacionesComponent,
    VisitasComponent,
    RetirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
