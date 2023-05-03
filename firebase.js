// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ7bxMK7_ETzf3BG3u2iSHUTRxjdRrr_c",
  authDomain: "tempem-4c764.firebaseapp.com",
  databaseURL: "https://tempem-4c764-default-rtdb.firebaseio.com",
  projectId: "tempem-4c764",
  storageBucket: "tempem-4c764.appspot.com",
  messagingSenderId: "201376466206",
  appId: "1:201376466206:web:0baa6a74e0561bfd85750f",
  measurementId: "G-Q4BS2EHRPC"
};
firebase.initializeApp(firebaseConfig);

var myDB = firebase.database().ref('Data');

function on(){
  myDB.set({
    'servo':'1'
  });
}

function off(){
  myDB.set({
    'servo':'0'
  });
}
