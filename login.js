firebase.auth().onAuthStateChanged((user)=>{
    if(!user)
    {
        location.replace("index.html");
    }
    else
    {
        document.getElementById("user").innerHTML = "Hello "+user.email;
    }
});

function logout(){
    if(confirm("Are You Sure!.You Want To Log Out.."))
        firebase.auth().signOut()
    
}