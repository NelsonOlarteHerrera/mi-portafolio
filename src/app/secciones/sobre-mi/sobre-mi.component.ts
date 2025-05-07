import { Component } from '@angular/core';

@Component({
  standalone: true, // Permite que el componente funcione de forma independiente sin estar en un módulo tradicional
  selector: 'app-sobre-mi', // Selector usado en la plantilla para renderizar el componente
  imports: [], // Aquí se pueden importar otros componentes, directivas o módulos si se necesitan
  templateUrl: './sobre-mi.component.html', // Ruta al archivo HTML del componente
  styleUrl: './sobre-mi.component.css' // Ruta al archivo CSS que aplica estilos específicos a esta sección
})
export class SobreMiComponent {
  // Componente funcional sin lógica adicional por ahora
  // Se puede expandir si deseas agregar interactividad o lógica más adelante
}
