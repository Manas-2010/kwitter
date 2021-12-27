//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:username,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
    }

function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message+"</h4>";
like_btn = "<button class='btn btn-warning' id="+ firebase_message_id +"value = "+ like+"onclick = 'updateLike(this.id)'>";
spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>like:" + like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_btn + spanWithTag;
document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like btn" + message_id);
      btnId = message_id;
      likes = document.getElementById(btnId).value;
      updatedLikes = Number(likes) + 1;
      console.log(updatedLikes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updatedLikes
      });
}

function log_out(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}