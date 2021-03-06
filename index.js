// prevent default button action
document.getElementById("login_form").addEventListener('submit',(event)=>{
    event.preventDefault();
});
// user authenticity
firebase.auth().onAuthStateChanged((user)=>{
    if(user)
    {
        location.replace("login.html");
    }
});
// login function
function login(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch((error)=>{
        document.getElementById('error').innerHTML="*"+ error.message;
        count++;
    })
}
// signup function 
function signUp(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById('error').innerHTML="*"+ error.message;
    });
}
// reset function
function reset(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    email.value="";
    password.value="";
}
// forget password js
function forgetPass(){
    const email = document.getElementById("email").value;
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML ="*" + error.message
    });
}
