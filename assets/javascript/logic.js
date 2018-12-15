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
  database.ref("users").on("child_added", function(snapshot) {
  
    var userX = snapshot.val().name;
    var roleX = snapshot.val().role;
    var dateX = snapshot.val().date;
    var rateX = snapshot.val().rate;
  
    var newRow = $("<tr>");
    var newUser = $("<td>" + userX + "</td>");
    var newRole = $("<td>" + roleX + "</td>");
    var newDate = $("<td>" + dateX + "</td>");
    var monthsWorked = $("<td>" + "" + "</td>");
    var monthlyRate = $("<td>" + rateX + "</td>");
    var totalBilled = $("<td>" + "" + "</td>");
  
  newRow.append(newUser).append(newRole).append(newDate).append(monthsWorked).append(monthlyRate).append(totalBilled);
  
  $("#tableBody").append(newRow);
  
  })
  
  // var sv = snapshot.val()
  
  // $('#nameDisplay').text(sv.name)
  // $('#roleDisplay').text(sv.role)
  // $('#startDateDisplay').text(sv.date)
  // $('#rateDisplay').text(sv.rate)
  