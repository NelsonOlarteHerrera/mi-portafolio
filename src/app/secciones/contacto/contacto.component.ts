import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * Componente de la sección "Contacto".
 * Envía los datos del formulario a un backend PHP (local en XAMPP).
 */
@Component({
  standalone: true,
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  imports: [FormsModule, CommonModule]
})
export class ContactoComponent {
  // Variables enlazadas a los inputs del formulario
  nombre = '';
  correo = '';
  mensaje = '';

  // Bandera para mostrar el mensaje de éxito
  enviado = false;

  /**
   * Función que se ejecuta al enviar el formulario.
   * Envia los datos como JSON al servidor PHP local.
   */
  enviar(formulario: any) {
    // Si el formulario es inválido, no continúa
    if (formulario.invalid) {
      return;
    }

    // Prepara los datos en formato JSON
    const datos = {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    };

    // Realiza la petición POST al archivo PHP en XAMPP
    fetch('https://miportafolio.lovestoblog.com/enviar.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Especifica que se envía JSON
      },
      body: JSON.stringify(datos) // Convierte los datos a string JSON
    })
      .then(res => res.json()) // Convierte la respuesta a JSON
      .then(data => {
        if (data.success) {
          this.enviado = true;           // Marca como enviado
          formulario.resetForm();        // Limpia el formulario
        } else {
          alert("Error: " + data.message); // Muestra error si el servidor lo indica
        }
      })
      .catch(err => alert("Error al enviar: " + err)); // Captura errores de conexión
  }
}
