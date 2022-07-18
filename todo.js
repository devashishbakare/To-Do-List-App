//pre-requicites
let allTask = [];
const taskInput = document.getElementById("add");
const taskList = document.getElementById("list");
const totalTask = document.getElementById("tasks-counter");

//functionality

//Notification
function showNotification(text){
    alert(text);
}

//util Function -> displaying task on screen
function displayTask(task){

    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" id="${task.id}" ${task.isComplete ? "checked" : ""} class="custom-checkbox">
        <label for="${task.id}">${task.text}</label>
        <img src="bin.jpeg" class="delete" data-id="${task.id}" />
    `;

    taskList.append(li);

}

//rendering to screen
function renderTask(taskId){

    taskList.innerHTML = "";

    for(let task = 0 ; task < allTask.length; task++){
        displayTask(allTask[task]);
    }
    totalTask.innerHTML = allTask.length;   

}


//adding task
function addTask(taskId){
    
    if(taskId) {
        allTask.push(taskId);
        showNotification("task Added Successfully");
        renderTask();
        return;
    }
    showNotification("Task not added");

}

//deleting task
function deleteTask(taskId){

    let newTask = allTask.filter(function(task){
        return task.id != taskId;
    });
    allTask = newTask;
    showNotification("task Deleted Successfully");
    renderTask();

}

//making/toggling task to be completed
function markTaskCompleted(taskId){

    const getTask = allTask.filter(function(task){
        return task.id == taskId;
    });

    if(getTask.length > 0 ) {
        let currTask = getTask[0];
        currTask.isComplete = !currTask.isComplete;
        renderTask();
        showNotification("Task mark as completed Succesfully");
        return;
    }

    showNotification("cound not found the task");
}

//getting input from user
function handleInput(e){
   
    if(e.key == "Enter"){
        
        const text = e.target.value;
        console.log(text);

        if(!text){
            showNotification("text can not be empty");
            return;
        }

        const task = {
            id : Date.now().toString(),
            text : text,
            isComplete : false
        };
        e.target.value = "";
        addTask(task);
        
    }

}

//getting input from the inputbox
function getListener(event){
     const target = event.target;
     console.log(target);

    if(target.className == "custom-checkbox"){
        const taskId = target.id;
        markTaskCompleted(taskId);
        return;

    }else if(target.className == "delete"){
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;
    }

}


function initialise(){
    taskInput.addEventListener('keyup', handleInput);
    document.addEventListener("click", getListener);
}

initialise();
































































































































































































// const tasks = [];
// const taskList = document.getElementById('list');
// const addTaskInput = document.getElementById('add');
// const tasksCounter = document.getElementById('tasks-counter');

// console.log('Working');

// function renderList () {}

// function markTaskAsComplete (taskId) {}

// function deleteTask (taskId) {}

// function addTask (task) {}

// function showNotification(text) {}

