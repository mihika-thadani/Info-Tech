

  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow >= 18) {
    greeting = "Good Evening!";
  } else if (hourNow >= 12) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Morning!";
  }

  document.getElementById("greeting").textContent = greeting;
