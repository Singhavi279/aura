import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAseTNkccypZ3q2e2Znl9ws57zG3rC0HyU",
  authDomain: "aura-website-3610b.firebaseapp.com",
  databaseURL: "https://aura-website-3610b.firebaseio.com",
  projectId: "aura-website-3610b",
  storageBucket: "aura-website-3610b.appspot.com",
  messagingSenderId: "870339027762",
  appId: "1:870339027762:web:52ec7f3552b57d58c72d2b"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};