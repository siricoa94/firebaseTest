firebase.auth().onAuthStateChanged( user => {
  if (user) {
    console.log("user signed in");
  } else {
    console.log("no user signed in");
  }
});
var txtEmail = document.getElementById("exampleInputEmail1");
var txtPassword = document.getElementById("exampleInputPassword1");
var logIn = document.getElementById("logIn");
var logOut = document.getElementById("logOut");
var signUp = document.getElementById("signUp");

signUp.addEventListener("click", e => {
  var email = txtEmail.value;
  var password = txtPassword.value;
  var auth = firebase.auth();
  var promise = auth.createUserWithEmailAndPassword(email, password);
  promise
  .catch(e => console.log(e.message));
  e.preventDefault();
  alert(email);
});
logOut.addEventListener("click", e => {
  firebase.auth().signOut();
});
logIn.addEventListener("click", e => {
  var email = txtEmail.value;
  var password = txtPassword.value;
  var auth = firebase.auth();
  var promise = auth.signInWithEmailAndPassword(email, password);
  promise
  .catch(e => console.log(e.message));
  e.preventDefault();
});
