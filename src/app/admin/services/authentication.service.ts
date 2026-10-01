import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private users = [
    { username: 'admin', password: '1234', role: 'admin' }
  ];
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  private inactivityTimer: any;

  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router, private ngZone: NgZone) {
    const savedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.currentUserSubject = new BehaviorSubject(savedUser);
    this.resetInactivityTimer();
  }

  // Método para iniciar sesión
  login(username: string, password: string) {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.resetInactivityTimer(); // Reinicia el temporizador de inactividad al iniciar sesión
    }
    return user;
  }

  // Método para cerrar sesión
  logout() {
    this.currentUserSubject.next(null);
    setTimeout(() => {
      localStorage.removeItem('currentUser');
    }, 3000); // Elimina el usuario del localStorage después de 3 segundos
    this.clearInactivityTimer(); // Limpia el temporizador de inactividad
  }

  // Verifica si el usuario actual es un administrador
  isAdmin() {
    return this.currentUserSubject.value?.role === 'admin';
  }

  // Reinicia el temporizador de inactividad
  private resetInactivityTimer() {
    this.clearInactivityTimer(); // Limpia cualquier temporizador existente
    this.ngZone.runOutsideAngular(() => {
      this.inactivityTimer = setTimeout(() => {
        this.ngZone.run(() => {
          this.logout(); // Cierra sesión automáticamente
          this.router.navigate(['/home']); // Redirige a la página de inicio
        });
      }, 120000); // 2 minutos
    });
  }

  // Limpia el temporizador de inactividad
  private clearInactivityTimer() {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }
  }

  // Método para reiniciar el temporizador de inactividad cuando hay una acción del usuario
  public userAction() {
    this.resetInactivityTimer();
  }
}