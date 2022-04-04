import { User } from './../models/user';
import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { user } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private afAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router
    ) { }
  SignUp(user: User, password: string){
    return this.afAuth
      .createUserWithEmailAndPassword(user.email, password)
      .then((result:any) => {
        this.SetUserData(result.user, user);
        this.router.navigate(['']);

      })
      .catch((error: any) =>{
        alert('Verifique a formatação dos dados inseridos')
        console.log(error)
      });
  }

  SignIn(email: string, password: string){
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if(result.user){
         this.GetUserData(result.user?.uid).then((users)=>{
           users.forEach((user) =>{
             localStorage.setItem('user',JSON.stringify(user.data()));
           });
         });
        }
        this.router.navigate(['home']);
      })
      .catch((error) =>{
        alert('Senha ou E-mail incorreto');
        console.log(error);
      });
  }

   async GetUserData(uid: string){
    const docRef = this.firestore.collection('users').ref;

    return await docRef.where('uid', '==', uid).get();
    
  }


  SetUserData(loginResponse: any, user: User){
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc('users/${loginResponse.uid'
    );
    const userData: User = {
      uid: loginResponse.uid,
      email: user.email,
      name: user.name,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
