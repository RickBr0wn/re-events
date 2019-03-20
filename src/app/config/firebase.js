import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA31XrtEDKkNjJLycows8nZXbeX_5t317g',
  authDomain: 're-events-221822.firebaseapp.com',
  databaseURL: 'https://re-events-221822.firebaseio.com',
  projectId: 're-events-221822',
  storageBucket: 're-events-221822.appspot.com',
  messagingSenderId: '646041920129'
}

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase
