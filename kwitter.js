function log_in(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("username", username);
    window.location = "kwitter_room.html";
}