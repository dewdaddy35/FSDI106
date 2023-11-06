let flag = false;//global variable
let isVisible = true;


function toggleVisibility(){
    if (isVisible){
        $("#form").hide();
        isVisible = false;
    }
    else{
        $("#form").show();
        isVisible = true;
    }

}
//SRP single responsibility principle uncle BOB
function displayTask(task)
{
    let syntax = 
    `<div class="task" style="border-color:${task.color}">
    <div class="task-info">
      <h3>${task.title}</h3>
      <p>${task.description}</p>      
    </div>    
      <label class="status">${task.status}</label>
     <div class="date-budget">
      <label>${task.date}</label>
      <label>${task.budget}</label>
    </div>
  </div>`;
    $(".pending-task").append(syntax);
}
function saveTask() {
    console.log("save is called");
    //get the values
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#txtBudget").val();
    
    console.log(title, description, color, date, status, budget);

    //build the object

    let taskToSave = new Task( flag, title, description, color, date, status, budget);
    console.log(taskToSave);
    
   


    //save the server
    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function (response){
            console.log(response);
        }, 
        error: function (error){
            console.log(error);
        } 
    });



   // display the task
   // displayTask(taskToSave);
    clearForm();
  }

  function loadTask(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
       
        success: function (response){
            let data = JSON.parse(response);
            console.log(response);//JSON 
            console.log(data);//Object plain text
            for(let i=0; i<data.length; i++){
                let task = data[i]
                if(task.name == "Eric"){
                    displayTask(task);
                }
            }
        }, 
       error: function (error){
            console.log(error);
       } 
    });
  }
  function clearForm() {
   $("#txtTitle").val('');
   $("#txtDescription").val('');
   $("#selColor").val('#000000');
   $("#selDate").val('');
   $("#selStatus").val('');
   $("#txtBudget").val('');
  }

  function testRequest(){
    $.ajax({
        type:"GET",//this is the GET method which reads form the server
        url: "http://fsdiapi.azurewebsites.net",
        success: function (response){
            console.log(response);
        }, 
        error: function (error){
            console.log(error);
        } 
    });
  }

  function toggleImportant() {
    const nonImportant = "fa-regular fa-user";
    const isImportant = "fa-solid fa-user";
    if(flag){
    $("#iconImportant").removeClass(isImportant).addClass(nonImportant);
    flag = false;
    }
    else{
        $("#iconImportant").removeClass(nonImportant).addClass(isImportant);
       flag = true;
    } 
  }
  //create a button in the list section. call it toggleDetails and create a function to hide the form section 

  function init() {
    //load data
  loadTask();
    //hook events
    $("#btnSave").click(saveTask);
    $("#iconImportant").click(toggleImportant);
    $("#btnDetails").click(toggleVisibility);
   
  }

  
  window.onload = init;