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
    let syntax = `<h3>${task.title}</h3>
    <h3>${task.description}</h3>
    <h3>${task.color}</h3>
    <h3>${task.date}</h3>
    <h3>${task.status}</h3>
    <h3>${task.budget}</h3> 
    
    `;
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



    //display the task
    displayTask(taskToSave);

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
  
    //hook events
    $("#btnSave").click(saveTask);
    $("#iconImportant").click(toggleImportant);
    $("#btnDetails").click(toggleVisibility);
  }
  
  window.onload = init;