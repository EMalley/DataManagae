var config = {
    apiKey: "AIzaSyBNqG-oQYGM7Da6tHipWyz_51Z_d_FJDK0",
    authDomain: "class-21-dec15.firebaseapp.com",
    databaseURL: "https://class-21-dec15.firebaseio.com",
    projectId: "class-21-dec15",
    storageBucket: "class-21-dec15.appspot.com",
    messagingSenderId: "853162754919"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$(document).on("click", "#addUser", function(event) {
    event.preventDefault();
    console.log('hi');
    // Capture User Inputs and store them into variables
  var name = $('#newName').val().trim();
  var role = $('#role').val().trim();
  var date = $('#startDate').val().trim();
  var rate = $('#rate').val().trim();

    
  database.ref("users").push({
    name: name,
    role: role,
    date: date,
    rate: rate,
})
})


// var sv = snapshot.val()

// $('#nameDisplay').text(sv.name)
// $('#roleDisplay').text(sv.role)
// $('#startDateDisplay').text(sv.date)
// $('#rateDisplay').text(sv.rate)