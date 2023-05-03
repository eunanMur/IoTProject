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
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
	}
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
			
	}
	
	
	function signOut(){
		auth.signOut();
	}
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			//Take user to a different or home page
      window.location.href="microbit.html"; 
			//is signed in
			
    }
		
		
		
	});
