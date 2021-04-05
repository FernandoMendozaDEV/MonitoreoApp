import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { InstalacionesComponent } from './components/pages/instalaciones/instalaciones.component';
import { VisitasComponent } from './components/pages/visitas/visitas.component';
import { RetirosComponent } from './components/pages/retiros/retiros.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
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
