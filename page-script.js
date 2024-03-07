$("#exam").hide();
$(".result-box").hide();
function getInfoStudent() {
  var name = document.getElementById("Fullname").value;
  var birthday = document.getElementById("Birthday").value;
  var CCCD = document.getElementById("ID").value;
  var address = document.getElementById("address").value;
  if(name == "" || birthday == "" || CCCD == "" || address == ""){
    alert("Vui lòng nhập đầy đủ thông tin trước khi bắt đầu bài thi!");
    return "";
  }
  else{
    $(".info-user-box").hide();
    $("#start-exam").hide();
    var info= "<h3>Thông tin</h3>" +
    "<p>Họ và tên: " + name + "</p>" +
    "<p>Ngày sinh: " + birthday + "</p>" +
    "<p>CCCD: " + CCCD + "</p>" + 
    "<p>Địa chỉ: " + address + "</p>";
    return info;
  }
}

var selected = [];

function checkAnswer() {
  var questions = document.getElementsByClassName("question");
  var correctAnswer = 0;
  for (var i = 0; i < questions.length; i++) {
    var radios = questions[i].querySelectorAll('input[type="radio"]');
    var checkbox = questions[i].querySelectorAll('input[type="checkbox"]');
    var userAnswer = null;
    var answerN3 = [];
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        selected.push(radios[j].value); // Corrected pushing value into selected array
        break;
      }
    }
    for (var j = 0; j < checkbox.length; j++) {
      if (checkbox[j].checked) {
        answerN3.push(checkbox[j].value);
      }
      else{
        answerN3.push(null);
      }
    }
    if(answerN3.length > 0) selected.push(answerN3);
    var textArea = questions[i].querySelector('textarea');
    if (textArea !== null) {
      var text = textArea.value.trim();
      selected.push(text);
    }
    if(selected.length < i + 1) selected.push(null);
  }
}

function startExam() {
  if(getInfoStudent() !== ""){
    $(".info-user-box").hide();
    $("#exam").show();
  }
}

function submitResult(){
  var info = getInfoStudent();
  var result = checkAnswer();

  $(".content").hide();
  $(".result-box").show();
  document.getElementById("result").innerHTML += info;

  console.log(selected);
  var questions = document.getElementsByClassName('answer');
  for(var i = 0 ; i < questions.length ; i++){
    var radios = questions[i].querySelectorAll('input[type="radio"]');
    var checkbox = questions[i].querySelectorAll('input[type="checkbox"]');
    var textArea = questions[i].querySelector('textarea');

    for(var j = 0 ; j < radios.length ; j++){
      if(radios[j].value === selected[i]){
        radios[j].checked = true;
        break;
      }
    }
    for (var j = 0; j < checkbox.length; j++) {
      if(selected[i].length > 0){
        if(checkbox[j].value === selected[i][j]){
          checkbox[j].checked = true;
        }
      }
    }

    if (textArea !== null) {
      textArea.value = selected[i];
    }
  }
  window.scrollTo(0, 0);
}