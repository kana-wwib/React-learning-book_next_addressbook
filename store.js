import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

//Firebase設定
var firebaseConfig = {
  apiKey: "AIzaSyBYd8Bl9gIxEG-btAiG9igM1WNDipJJ_cQ",
  authDomain: "kana-next-address.firebaseapp.com",
  databaseURL: "https://kana-next-address.firebaseio.com",
  projectId: "kana-next-address",
  storageBucket: "kana-next-address.appspot.com",
  messagingSenderId: "778424966174",
  appId: "1:778424966174:web:a8ad640e53e60c7e16a20f",
  measurementId: "G-6JFT98WECE"
};

// Firebaseの初期化
var fireapp;
try {
  fireapp = firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}
export default fireapp;

//ステート初期値
const initial = {
  login: false,
  username: '(click here!)',
  email: '',
  data: [],
  items: []
}

//レデューサー
function fireReducer (state = initial, action) {
  switch (action.type) {
    //ダミー
    case 'UPDATE_USER':
      return action.value;
    //デフォルト
    default: 
    return state;
  }
}

//initStore関数
export function initStore(state = initial) {
  return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}