import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { EstadoListaComponent } from './estado-lista/estado-lista.component';

const routes: Routes = [
    {path: "login", component: LoginComponent},

{
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: "home", component: HomeComponent },
      { path: 'estados', component: EstadoListaComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
