const input = document.getElementById("inputText");
const submitBtn = document.getElementById("button");
const tasks = document.getElementById("tasks");
const completedTasks = document.getElementById("completedTasks");
const h3Tag = document.createElement("h3");
let task = [];
submitBtn.onclick = function(){
    const trimmed = input.value.trim();
    if(trimmed === "") return;
    task.push(input.value);
    input.value="";
    todo();
    console.log(task);
}
function todo(inp){
    // task.push(input.value); not here because every time todo is called it adds a new value in array despite having any input
    
    tasks.textContent="";
    for (let i = 0; i < task.length; i++) {
        const div = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox" + i;
        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = task[i];
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.id = "editButton";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.id = "deleteButton";
        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(editButton);
        div.appendChild(deleteButton);
        tasks.appendChild(div);


        deleteButton.onclick = function(){
            task.splice(i,1);
            todo();          
        }

        editButton.onclick = function(){
            const newTask = document.createElement("input");
            newTask.type = "text";
            newTask.id = "newTask";
            newTask.value = task[i];
            const saveBtn = document.createElement("button");
            saveBtn.type = "button";
            saveBtn.textContent ="Save";
            saveBtn.id = "saveBtn";
            editButton.style.display = "none";
            label.style.display = "none";
            div.appendChild(checkbox);
            div.appendChild(newTask);
            div.appendChild(saveBtn);
            div.appendChild(deleteButton);


            saveBtn.onclick = function(){
                task[i] = newTask.value;
                todo();
            }
        }


        checkbox.onchange = function(){
            if(checkbox.checked){
                label.style.textDecoration = "line-through";
                editButton.style.display = "none";
                deleteButton.style.display = "none";
            }
            else{
                label.style.textDecoration = "none";
                editButton.style.display = "";
                deleteButton.style.display = "";
            }
        }
    }

}


input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitBtn.click();
  }
});