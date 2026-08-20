const inputBox = document.getElementById("taskInput");

const listContainer = document.getElementById("list-container");


function addTask() {

    // Check empty input
    if (inputBox.value.trim() === "") {

        alert("You need to write something");

        return;
    }


    // Create li
    let li = document.createElement("li");


    // Create task text
    let taskText = document.createElement("span");

    taskText.className = "task-text";

    taskText.textContent = inputBox.value;


    // Create delete button
    let deleteBtn = document.createElement("span");

    deleteBtn.className = "delete-btn";

    deleteBtn.innerHTML = "\u00d7";


    // Add elements to li
    li.appendChild(taskText);

    li.appendChild(deleteBtn);


    // Add li to list
    listContainer.appendChild(li);


    // Clear input
    inputBox.value = "";

    // Put cursor back in input
    inputBox.focus();
}


// Click event
listContainer.addEventListener("click", function(e) {

    // Delete task
    if (e.target.classList.contains("delete-btn")) {

        e.target.parentElement.remove();

    }


    // Complete task
    else if (e.target.classList.contains("task-text")) {

        e.target.parentElement.classList.toggle("checked");

    }

});