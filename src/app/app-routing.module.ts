import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { InstalacionesComponent } from './components/pages/instalaciones/instalaciones.component';
import { VisitasComponent } from './components/pages/visitas/visitas.component';
import { RetirosComponent } from './components/pages/retiros/retiros.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EditInstalacionComponent } from './components/posts/edit-instalacion/edit-instalacion.component';
import { EditVisitaComponent } from './components/posts/edit-visita/edit-visita.component';
import { EditRetiroComponent } from './components/posts/edit-retiro/edit-retiro.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'instalaciones',
        component: InstalacionesComponent,
      },
      {
        path: 'visitas',
        component: VisitasComponent,
      },
      {
        path: 'retiros',
        component: RetirosComponent,
      },
      {
        path: 'instalacion/:id',
        component: EditInstalacionComponent,
      },
      {
        path: 'visitas/edit',
        component: EditVisitaComponent,
      },
      {
        path: 'retiros/edit',
        component: EditRetiroComponent,
      }
    ]
  },
  {
    path:'**',
    redirectTo: 'dashboard'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
