//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    
    function send(){
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
    
    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
    }