import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBl_iuClcP2JLNYlMsim_M9GkUp3Ob6moo",
    authDomain: "hackutd-dda6a.firebaseapp.com",
    projectId: "hackutd-dda6a",
    storageBucket: "hackutd-dda6a.appspot.com",
    messagingSenderId: "393903911592",
    appId: "1:393903911592:web:771764b972033631a1c89d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const App = () => {
  return (
      <div className="App">
        <div className="App-header">
            yo
        </div>
      </div>
  );
};
export default App;
