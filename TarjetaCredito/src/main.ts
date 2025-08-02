import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { App } from './app/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './environments/environment';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule
    ),
  ],
}).catch((err) => 
  console.error('Error bootstrapping the application:', err)
);
  

