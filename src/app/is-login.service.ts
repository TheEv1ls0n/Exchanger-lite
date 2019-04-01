import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoginService {
  isLoggedIn: boolean;
  onToogleIsLoggedIn(isLoggedIn) {
   return this.isLoggedIn = isLoggedIn;
  }
  constructor() { }
}
