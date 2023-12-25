const todos = [];
    function addTodo() {
      const todoInput = document.getElementById("todoInput");
      const todoName = todoInput.value.trim();
      if (todoName === "") {
        alert("Please enter a valid TODO.");
        return;
      }
      const newTodo = {
        name: todoName,
        isCompleted: false
      };
      todos.push(newTodo);
      displayTodos();
      todoInput.value = "";
    }
    function displayTodos() {
      const todoList = document.getElementById("todoList");
      todoList.innerHTML = "";
      for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.isCompleted;
        checkbox.addEventListener("change", function () {
          toggleTodoCompletion(i);
        });
        const todoText = document.createElement("span");
        todoText.textContent = todo.name;
        listItem.appendChild(checkbox);
        listItem.appendChild(todoText);
        todoList.appendChild(listItem);
      }
    }
    function toggleTodoCompletion(index) {
      todos[index].isCompleted = !todos[index].isCompleted;
      displayTodos();
    }