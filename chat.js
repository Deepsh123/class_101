// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCb0acA-HHNhd_ZEqtyJjhEwv-w36xiT3c",
    authDomain: "chatwebsite-5ad2d.firebaseapp.com",
    databaseURL: "https://chatwebsite-5ad2d-default-rtdb.firebaseio.com",
    projectId: "chatwebsite-5ad2d",
    storageBucket: "chatwebsite-5ad2d.appspot.com",
    messagingSenderId: "117111389395",
    appId: "1:117111389395:web:3073a85e69ae3162baa826"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



