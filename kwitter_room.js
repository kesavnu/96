
//ADD YOUR FIREBASE LINKS HERE
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
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


