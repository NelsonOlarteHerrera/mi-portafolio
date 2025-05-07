import { Component } from '@angular/core';

/**
 * Componente standalone para la sección de habilidades técnicas.
 * No requiere otros módulos importados ya que solo se renderiza contenido estático.
 */
@Component({
  standalone: true,                      // Permite que el componente funcione sin un módulo NgModule tradicional
  selector: 'app-habilidades',           // Nombre de etiqueta HTML para usar el componente
  templateUrl: './habilidades.component.html', // Archivo HTML asociado
  styleUrl: './habilidades.component.css',     // Archivo CSS con estilos específicos
  imports: []                            // No se requieren imports adicionales
})
export class HabilidadesComponent {
  // No se necesita lógica TS, ya que esta sección es completamente estática
}
