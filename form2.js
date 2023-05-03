                                                              // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAQ7bxMK7_ETzf3BG3u2iSHUTRxjdRrr_c",
    authDomain: "tempem-4c764.firebaseapp.com",
    databaseURL: "https://tempem-4c764-default-rtdb.firebaseio.com",
    projectId: "tempem-4c764",
    storageBucket: "tempem-4c764.appspot.com",
    messagingSenderId: "201376466206",
    appId: "1:201376466206:web:0baa6a74e0561bfd85750f",
    measurementId: "G-Q4BS2EHRPC"
//firebase config stuff
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
	const auth = firebase.auth();

	function signOut(){
		auth.signOut();
    window.location.href="index.html";
    
	}
