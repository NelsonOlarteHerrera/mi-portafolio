import { Routes } from '@angular/router';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { SobreMiComponent } from './secciones/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './secciones/habilidades/habilidades.component';
import { CurriculumComponent } from './secciones/curriculum/curriculum.component';
import { PortafolioComponent } from './secciones/portafolio/portafolio.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';

export const routes: Routes = [
    {path: '',component:InicioComponent},
    {path: 'sobre-mi',component:SobreMiComponent},
    { path: 'habilidades', component: HabilidadesComponent },
    { path: 'curriculum', component: CurriculumComponent },
    { path: 'portafolio', component: PortafolioComponent },
    { path: 'contacto', component: ContactoComponent },
];
