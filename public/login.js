document.getElementById("buttonLogIn").addEventListener("click", function() {
  // var username = document.getElementById("username").value;
  // var cookieString = "username=" + username;
  // console.log(cookieString);
  // document.cookie = "username=" + username;
  // console.log(document.cookie)
  console.log(window.location.href);

  window.location.href('insights_intake.html?name=' + theUsernameIJustGotFromTheURL)
});
