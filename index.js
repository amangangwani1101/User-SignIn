document.getElementById("login_form").addEventListener('submit',(event)=>{
    event.preventDefault();
});
firebase.auth().onAuthStateChanged((user)=>{
    if(user)
    {
        location.replace("login.html");
    }
});
let count = 0;
function login(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch((error)=>{
        document.getElementById('error').innerHTML="*"+ error.message;
        count++;
    })
}
function signUp(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById('error').innerHTML="*"+ error.message;
    });
}
function reset(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    email.value="";
    password.value="";
}
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
