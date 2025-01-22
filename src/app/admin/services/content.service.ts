import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contents = [
    { id: 1, title: 'Página de Inicio', description: 'Contenido de la página de inicio' },
    { id: 2, title: 'Sobre Nosotros', description: 'Información sobre la empresa' },
    { id: 3, title: 'Contacto', description: 'Detalles de contacto' }
  ];

  // Obtener lista de contenidos
  getContents(): Observable<{ id: number, title: string, description: string }[]> {
    return of(this.contents); // Simula una respuesta del backend
  }

  // Obtener un contenido por su ID
  getContentById(id: number): Observable<{ id: number, title: string, description: string } | undefined> {
    return of(this.contents.find(content => content.id === id));
  }

  // Crear un nuevo contenido
  addContent(newContent: { title: string, description: string }): Observable<{ id: number, title: string, description: string }> {
    const newId = this.contents.length + 1;
    const content = { id: newId, ...newContent };
    this.contents.push(content);
    return of(content);
  }

  // Editar un contenido
  editContent(id: number, updatedContent: { title: string, description: string }): Observable<{ id: number, title: string, description: string } | undefined> {
    const content = this.contents.find(content => content.id === id);
    if (content) {
      content.title = updatedContent.title;
      content.description = updatedContent.description;
      return of(content);
    }
    return of(undefined);
  }

  // Eliminar un contenido
  deleteContent(id: number): Observable<boolean> {
    const index = this.contents.findIndex(content => content.id === id);
    if (index !== -1) {
      this.contents.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
