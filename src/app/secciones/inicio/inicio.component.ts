// Importamos los módulos necesarios para el componente
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // Define que este componente es standalone (autónomo) sin necesidad de módulo declarado
  standalone: true,

  // Nombre del selector que se usa en HTML para insertar este componente
  selector: 'app-inicio',

  // Se importa RouterLink para usar rutas en enlaces internos (<a routerLink>)
  imports: [RouterLink],

  // Ruta al archivo HTML del componente
  templateUrl: './inicio.component.html',

  // Ruta al archivo CSS del componente
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  // Por ahora, este componente no tiene lógica adicional
}
