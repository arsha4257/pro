var firebaseConfig = {
    apiKey: "AIzaSyB-OT2bBCKXcsSTeJUKPlKe8RBtwrjlXx8",
    authDomain: "letscahtwedapp.firebaseapp.com",
    databaseURL: "https://letscahtwedapp-default-rtdb.firebaseio.com",
    projectId: "letscahtwedapp",
    storageBucket: "letscahtwedapp.appspot.com",
    messagingSenderId: "787020137207",
    appId: "1:787020137207:web:104dc8c0c68481f29789f2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function send(){
    msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
     }),
   document.getElementById("msg").value="";
}