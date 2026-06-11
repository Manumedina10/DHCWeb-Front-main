import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdministracionComponent } from './services/hospitales/administracion/administracion.component';
import { AperturaComponent } from './services/hospitales/apertura/apertura.component';
import { DesperdicioComponent } from './services/hospitales/desperdicio/desperdicio.component';
import { EstadisticaComponent } from './services/hospitales/estadistica/estadistica.component';
import { InternacionComponent } from './services/hospitales/internacion/internacion.component';
import { ProcesosComponent } from './services/hospitales/procesos/procesos.component';
import { SeguridadDelPacienteComponent } from './services/hospitales/seguridad-del-paciente/seguridad-del-paciente.component';
import { OportunidadesComponent } from './services/pagadores/oportunidades/oportunidades.component';
import { UpiComponent } from './services/pagadores/upi/upi.component';
import { PharmaAppComponent } from './services/pharma/pharma-app/pharma-app.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'services',
    children: [
      { path: '', loadComponent: () => import('./services/services-home.component').then(m => m.ServicesHomeComponent) },
      { path: 'hospitales', loadComponent: () => import('./services/hospitales/hospitales.component').then(m => m.HospitalesComponent) },
      { path: 'pagadores', loadComponent: () => import('./services/pagadores/pagadores.component').then(m => m.PagadoresComponent) },
      { path: 'pharma', loadComponent: () => import('./services/pharma/pharma.component').then(m => m.PharmaComponent) },
    ]
  },
  {
    path: 'services/hospitales',
    children: [
      { path: 'apertura', component: AperturaComponent },
      { path: 'administracion', component: AdministracionComponent },
      { path: 'estadistica', component: EstadisticaComponent },
      { path: 'internacion', component: InternacionComponent },
      { path: 'procesos', component: ProcesosComponent },
      { path: 'seguridad-del-paciente', component: SeguridadDelPacienteComponent },
      { path: 'desperdicio', component: DesperdicioComponent },
    ]
  },
  {
    path: 'services/pagadores',
    children: [
      { path: 'oportunidades', component: OportunidadesComponent },
      { path: 'upi', component: UpiComponent },
    ]
  },
  {
    path: 'services/pharma',
    children: [
      { path: 'app', component: PharmaAppComponent },
      // ...
    ]
  },
  { path: '**', redirectTo: '' }
];
