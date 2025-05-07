import { Component } from '@angular/core';

/**
 * Componente de la sección "Currículum".
 * Se muestra información sobre educación, experiencia profesional y certificaciones.
 */
@Component({
  standalone: true,                      // Permite usar el componente sin módulo externo
  selector: 'app-curriculum',            // Selector para usar el componente en HTML
  templateUrl: './curriculum.component.html', // Archivo de plantilla asociado
  styleUrl: './curriculum.component.css',     // Archivo de estilos asociado
  imports: []                            // No se importan otros módulos aquí
})
export class CurriculumComponent {
  // Este componente solo presenta datos estáticos, no requiere lógica en TS
}
