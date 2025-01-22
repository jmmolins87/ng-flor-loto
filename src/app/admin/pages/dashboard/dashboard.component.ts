import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  username: string = 'Administrador'; // Nombre del usuario
  contentList: { id: number, title: string, description: string }[] = [];;

  constructor(
    private router: Router,
    private authService: AuthenticationService, 
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.loadContents(); // Cargar contenidos al inicializar el componente
  }

  // Cargar los contenidos desde el servicio
  loadContents() {
    this.contentService.getContents().subscribe(contents => {
      this.contentList = contents;
    });
  }

  // Agregar nuevo contenido
  onAddNew() {
    const newContent = { title: 'Nuevo Contenido', description: 'Descripción del nuevo contenido' };
    this.contentService.addContent(newContent).subscribe(content => {
      this.contentList.push(content); // Agregar el contenido a la lista
    });
  }

  // Editar un contenido
  onEdit(content: { id: number, title: string, description: string }) {
    const updatedContent = { title: content.title + ' (editado)', description: content.description + ' (editado)' };
    this.contentService.editContent(content.id, updatedContent).subscribe(updated => {
      if (updated) {
        content.title = updated.title;
        content.description = updated.description;
      }
    });
  }

  // Eliminar un contenido
  onDelete(content: { id: number, title: string, description: string }) {
    this.contentService.deleteContent(content.id).subscribe(success => {
      if (success) {
        this.contentList = this.contentList.filter(c => c.id !== content.id); // Eliminar el contenido de la lista
      }
    });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
