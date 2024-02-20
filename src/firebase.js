import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyC9MuVy0aHk5SuqjITS2i3Lj_tlzV64Fro",
  authDomain: "disneyplus-clone-66ce4.firebaseapp.com",
  projectId: "disneyplus-clone-66ce4",
  storageBucket: "disneyplus-clone-66ce4.appspot.com",
  messagingSenderId: "994686249886",
  appId: "1:994686249886:web:c7142ff2046f5515ba848f",
  databaseURL: 'https://disneyplus-clone-66ce4-default-rtdb.firebaseio.com/'
};

export const app = initializeApp(firebaseConfig)