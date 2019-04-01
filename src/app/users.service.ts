import {Injectable} from '@angular/core';
import {RegisterModel} from './models/register.model';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export  class UsersService {
  user: RegisterModel;

  constructor(private firestore:AngularFirestore) {}

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

}
