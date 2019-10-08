import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(public database: AngularFirestore) { }
  getQuestions(){
    console.log('called2');
    return this.database.collection('/questions').snapshotChanges()
  }

  getAnswers(question: string){
    return this.database.collection('/questions').doc(question).snapshotChanges()
  }

  

}
