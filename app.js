$('document').ready(function() {
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDj-LvKeMqL7iTWWUo8ki7cLGupd7GjFmk",
    authDomain: "sociallab-a8547.firebaseapp.com",
    databaseURL: "https://sociallab-a8547.firebaseio.com",
    projectId: "sociallab-a8547",
    storageBucket: "sociallab-a8547.appspot.com",
    messagingSenderId: "973475069338"
  };
  firebase.initializeApp(config);
  /* aca */
  $('#btn').click(function(){
    /* alert('hola'); */
    var email = $('#emailuser').val();
    var password = $('#passworduser').val();
  });

});