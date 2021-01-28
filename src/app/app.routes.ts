import {Router, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { CrearUsuarioComponent } from './Components/crear-usuario/crear-usuario.component';
import { IniciarSesionComponent } from './Components/iniciar-sesion/iniciar-sesion.component';
import { MermeladaComponent } from './Components/mermelada/mermelada.component';
import { MermeladasComponent } from './Components/mermeladas/mermeladas.component';
import { PerfilComponent } from './Components/perfil/perfil.component';

const APP_ROUTES: Routes = 
[
    { path: 'home', component: HomeComponent },
    { path: 'mermeladas', component: MermeladasComponent },
    { path: 'crearUsuario', component: CrearUsuarioComponent },
    { path: 'iniciarSesion', component: IniciarSesionComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'mermelada/:id', component:MermeladaComponent },
    { path: 'buscar/:texto', component:BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});