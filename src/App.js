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
                <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32"><h1
                    className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white">Analyze
                    your home-buying potential with just a few minutes</h1><p
                    className="mt-6 text-lg text-center max-w-3xl mx-auto text-white">View home-buying statistics across
                    the United States, or enter and edit your current finances to see your home buying potential.</p>
                    <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm"><a
                        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
                        href="/placeholder">Get Started</a>
                    </div>
                </div>
                <div className={"pt-40 pb-20 px-20 space-x-20 flex flex-row"}>
                    <div className={"w-60 h-60 bg-slate-500"}></div>
                    <div className={"w-60 h-60 bg-slate-500"}></div>
                    <div className={"w-60 h-60 bg-slate-500"}></div>
                </div>
            </div>
        </div>
    );
};
export default App;
