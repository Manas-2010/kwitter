
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBTvTJ7f-sBIYfEsb6KeEWsaORJnS0IzPY",
      authDomain: "kwitter-a2045.firebaseapp.com",
      databaseURL: "https://kwitter-a2045-default-rtdb.firebaseio.com",
      projectId: "kwitter-a2045",
      storageBucket: "kwitter-a2045.appspot.com",
      messagingSenderId: "411664457094",
      appId: "1:411664457094:web:6c1394eed3cd4abc1fe007"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Wellcome "+ username+"!";
    function addRoom(){
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
    }

function getData(){
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("RoomName = "+Room_names);
      row = "<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function log_out(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}