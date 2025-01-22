import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users = [
    { username: 'admin', password: '1234', role: 'admin' },
    { username: 'editor', password: '1234', role: 'editor' }
  ];

  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    const savedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.currentUserSubject = new BehaviorSubject(savedUser);
  }

  login(username: string, password: string) {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }
    return user;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAdmin() {
    return this.currentUserSubject.value?.role === 'admin';
  }
}
