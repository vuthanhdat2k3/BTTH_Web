$("#exam").hide();
$(".result-box").hide();
var answerN1 = ["Đúng", "Đúng", "Đúng", "Đúng", "Đúng", "Đúng", "Đúng", "Đúng", "Đúng", "Đúng"];
function getInfoStudent() {
  var name = document.getElementById("Fullname").value;
  var id = document.getElementById("ID-student").value;
  var classroom = document.getElementById("Classroom").value;
  $(".info-user-box").hide();
  $("#start-exam").hide();
  var info= "<h3>Kết quả</h3>" +
  "<p>Họ và tên: " + name + "</p>" +
  "<p>Mã sinh viên: " + id + "</p>" +
  "<p>Lớp: " + classroom + "</p>";
  return info;
}

function checkAnswer(){
  var questions = document.getElementsByClassName("question");
  var correctAnswer = 0;
  for(var i = 0 ; i < questions.length ; i++){
   var radios = questions[i].querySelectorAll('input[type="radio"]');
   var userAnswer = null;
   for(var j = 0 ; j < radios.length ; j++){
    if(radios[j].checked){
      userAnswer = radios[j].value;
      break;
    }
   }
   if(userAnswer === answerN1[i]) {
    correctAnswer ++;
   }
  }
  return correctAnswer;
}

function startExam() {
  $(".info-user-box").hide();
  $("#exam").show();
}

function submitResult(){
  var info = getInfoStudent();
  var result = checkAnswer();
  $(".content").hide();
  $(".result-box").show();
  document.getElementById("result").innerHTML += info + "Kết quả: " + result + "/40";
}