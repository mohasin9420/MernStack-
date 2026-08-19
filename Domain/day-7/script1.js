function addTask() {
  const input = document.getElementById("task");
  const text = input.value.trim();

  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `${text} <button class="delete" onclick="this.parentElement.remove()">Delete</button>`;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}