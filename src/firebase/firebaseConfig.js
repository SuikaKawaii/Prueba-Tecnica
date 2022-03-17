import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {FacebookAuthProvider, getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8M23_-f_SPeFMwvWUBG1ffMFF9yt-i1Y",
    authDomain: "frontend8-70f2e.firebaseapp.com",
    projectId: "frontend8-70f2e",
    storageBucket: "frontend8-70f2e.appspot.com",
    messagingSenderId: "46787903935",
    appId: "1:46787903935:web:9a3d01b9d7741f9521610a"
};

  const app = initializeApp(firebaseConfig);
  const google = new GoogleAuthProvider();
  const facebook = new FacebookAuthProvider();
  const auth = getAuth(app)
  const db = getFirestore(app);
  

  export {
      app, 
      google,
      facebook,
      db
  }