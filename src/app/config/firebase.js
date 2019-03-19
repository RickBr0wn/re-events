import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUNBjilavH2T3H4WsM319-CnKkhA4pcco",
  authDomain: "revents-31284.firebaseapp.com",
  databaseURL: "https://revents-31284.firebaseio.com",
  projectId: "revents-31284",
  storageBucket: "revents-31284.appspot.com",
  messagingSenderId: "189195857891"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;