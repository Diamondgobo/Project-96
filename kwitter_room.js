const firebaseConfig = {
    apiKey: "AIzaSyDZIlgmZWud5PpvFom60N1gLj6rOABvosY",
    authDomain: "reachme-6dacc.firebaseapp.com",
    databaseURL: "https://reachme-6dacc-default-rtdb.firebaseio.com",
    projectId: "reachme-6dacc",
    storageBucket: "reachme-6dacc.appspot.com",
    messagingSenderId: "144803490795",
    appId: "1:144803490795:web:539c905080d27c396d87ae",
    measurementId: "G-7ZH9BDBQ1X"
  };
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding Room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Roomname= " + Room_names);
        row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        });});}
  getData();
  
  function redirectToRoomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
  } 
  
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
  