import { TestBed } from '@angular/core/testing';
import { FirebaseService } from './firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

describe('FirebaseService', () => {
  
  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        snapshotChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: FirestoreStub },
    ],
  }));

  it('should be created', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service).toBeTruthy();
  });
});
