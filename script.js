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
function todoList() {  
  var currentTask = [];
  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is empty");
  }

  function renderTask() {
    localStorage.setItem("currentTask", JSON.stringify(currentTask));
    let allTask = document.querySelector(".allTask");
    let sum = "";
    currentTask.forEach(function (elem, idx) {
      sum =
        sum +
        ` <div class="task">
              <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
              <button id = ${idx}>Mark as completed</button>
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

    renderTask();

    taskInput.value = "";
    taskDetailsInput.value = "";
    taskCheckbox.checked = false;
  });

  document.querySelector(".allTask").addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      let index = e.target.id;
      currentTask.splice(index, 1);
      renderTask();
    }
  });
}
todoList();



/// Daily Planner

let hours = Array.from({length:18},function(elem,idx){
  return `${6+idx}:00- ${7+idx}:00`
})

let wholeDaySum ='';
hours.forEach(function(elem){
  wholeDaySum = wholeDaySum + ` <div class="day-planner-time">
            <p>${elem}</p>
            <input type="text" placeholder="...">
          </div>`
})

var dayPlanner = document.querySelector('.day-planner')
dayPlanner.innerHTML = wholeDaySum