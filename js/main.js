const email = document.getElementById("email");
const addbtn = document.getElementById("btn");

const database = firebase.database();
const rootRef = database.ref('users');

addbtn.addEventListener('click', (e) => {
    e.preventDefault();
    rootRef.child(email.value).set({
        email: email.value,
    });
});

// function store() {
//     email = document.getElementById("email").value;
//     firebase.datebase().ref("/").child(Name).update({
//         email : email,
//         pupose : "adding gmail"
//     });
// }

// $(".btn").click(function(){
//     var email = $("#email").val();
//     var rootRef = firebase.datebase().ref().child("user");
//     var userId = firebase.auth().currentUser.uid;
//     var userRef = rootRef.child(userId);

//     if ( email !=""){
//         var userData = {
//             "email" : email,
//         };
//         userRef.set(userData, function(error){
//             if(error){
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 console.log(errorCode);
//                 console.log(errorMessage);
//                 window.alert("message: " + errorMessage);
//             }else{
//                 window.location.href = "index.html";
//             }
//         });
//     }
//     else
//     {
//         window.alert("forn is incomplete. please fill out");
//     }
// });

//vailation
function ValidateEmail() {
    var email = document.getElementById("email").value;

    // var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;

    if (email.match(regex)) {
        alert("Valid email address!");
        return true;
    } else {
        alert("Invalid email address!");   
        return false;
    }
    
}