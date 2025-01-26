const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        saveData(); // Save data after adding a task
    }
    inputBox.value = "";
}

// Add event listener for toggling and deleting tasks
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save data after toggling a task
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save data after removing a task
    }
}, false);

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Call showTask on page load to display saved tasks
showTask();
