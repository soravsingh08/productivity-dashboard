function openFeatures() {
  var allElems = document.querySelectorAll(".elem");
  var fullElemPageBackBtn = document.querySelectorAll(".back");
  var fullElemPage = document.querySelectorAll(".fullElem");
  allElems.forEach(function (elem, index) {
    elem.addEventListener("click", function () {
      //    console.log(elem)
      fullElemPage[index].style.display = "block";
    });

    fullElemPageBackBtn.forEach(function (back, index) {
      back.addEventListener("click", function () {
        fullElemPage[index].style.display = "none";
      });
    });
  });
}
openFeatures();

//LOCAL STORAGE PE TASK RKHNA

var currentTask = []
if(localStorage.getItem('currentTask')){
    currentTask = JSON.parse(localStorage.getItem('currentTask'))
}else{
    console.log('Task list is empty')
  
}

function renderTask() {
  var allTask = document.querySelector(".allTask");
  sum = "";
  currentTask.forEach(function (elem) {
    sum =
      sum +
      ` <div class="task">
              <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
              <button>Mark as completed</button>
            </div>`;
  });
  allTask.innerHTML = sum;
}
renderTask();


let taskInput = document.querySelector(".addTask form input");
let taskDetailsInput = document.querySelector(".addTask form textarea");
let form = document.querySelector(".addTask form");
let taskCheckbox = document.querySelector(".addTask form #check");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //   console.log(taskInput.value);
  //   console.log(taskDetailsInput.value);
  //   console.log(taskCheckbox.checked)
  currentTask.push({
    task: taskInput.value,
    details: taskDetailsInput.value,
    imp: taskCheckbox.checked,
  });

  localStorage.setItem('currentTask',JSON.stringify(currentTask))
  taskInput.value =''
  taskDetailsInput.value= ''
  taskCheckbox.checked = 'false '


renderTask();
});

