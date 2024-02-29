
$ (".form-container.sign-up-container").hide();
$("#signup-box-link").click(function(){
  $(".form-container.sign-in-container").fadeOut(100);
  $(".form-container.sign-up-container").delay(100).fadeIn(100);
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});

$("#login-box-link").click(function(){
  $(".form-container.sign-in-container").delay(100).fadeIn(100);
  $(".form-container.sign-up-container").fadeOut(100);
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});

function register() {
  event.preventDefault();
  var username = document.getElementById("new-username").value;
  var password = document.getElementById("new-password").value;
  var email = document.getElementById("email").value;
  var user = {
    username: username,
    password: password,
    email: email,
  };
  var json = JSON.stringify(user);

  localStorage.setItem(username, json);
  alert("Đăng ký thành công!");
}

function login() {
  event.preventDefault();
  var loginUsername = document.getElementById("username").value;
  var loginPassword = document.getElementById("password").value;
  var user = localStorage.getItem(loginUsername);
  var data = JSON.parse(user);
  if (user === null) {
    alert("Vui lòng nhập username và password");
  } else if (loginUsername === data.username && loginPassword === data.password){
    window.location.href= "../feature/page.html";
  } else {
    alert("Sai username hoặc mật khẩu!");
  }
}
