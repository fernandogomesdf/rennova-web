import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { CalendarioAlternativoComponent } from './calendario-alternativo/calendario-alternativo.component';
import { LoginComponent } from '../publico/login/login.component';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  { path: 'publico/login', component: LoginComponent },
  { path: 'gestao/agendamento', component: AgendamentoComponent, canActivate: [LoginGuard] },
  { path: 'gestao/calendario_alternativo', component: CalendarioAlternativoComponent, canActivate: [LoginGuard] },
  { path: '', component: AgendamentoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestaoRoutingModule { }
