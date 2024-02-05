//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyD-i088FsCiMUDb0t2r4m4sKN0KJFJdENo",
    authDomain: "kwitter-fb384.firebaseapp.com",
    databaseURL: "https://kwitter-fb384-default-rtdb.firebaseio.com",
    projectId: "kwitter-fb384",
    storageBucket: "kwitter-fb384.appspot.com",
    messagingSenderId: "1061018872903",
    appId: "1:1061018872903:web:aad4003b89842bf12b5562"
  };
  
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name") ;
   room_name=localStorage.getItem("room_name");
   function send() 
   {
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
     });
     document.getElementById("msg").value="";
   }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
