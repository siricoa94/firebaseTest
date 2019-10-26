  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzypdC3VeT_pvzX7KAwbxIAA4S_oZ7DiY",
    authDomain: "bank-of-andrew.firebaseapp.com",
    databaseURL: "https://bank-of-andrew.firebaseio.com",
    projectId: "bank-of-andrew",
    storageBucket: "bank-of-andrew.appspot.com",
    messagingSenderId: "546770562236",
    appId: "1:546770562236:web:dd7848ed4c0e03dfa434b9",
    measurementId: "G-XFSNBP5MJB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var emailText = document.getElementById("exampleInputEmail1");
var passwordText = document.getElementById("exampleInputPassword1");
var logIn = document.getElementById("logIn");
var logOut = document.getElementById("logOut");
var signUp = document.getElementById("signUp");

logIn.addEventListener("click", e => {
var email = emailText.value;
var password = passwordText.value;
var auth = firebase.auth();
var promise = auth.signInWithEmailAndPassword(email, password);
promise.catch(e => console.log(e.message));
console.log("hit");
});
signUp.addEventListener("click", e => {
var email = emailText.value;
var password = passwordText.value;
var auth = firebase.auth();
var promise = auth.createUserWithEmailAndPassword(email, password);
promise.catch(e => console.log(e.message));
});