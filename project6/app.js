<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f9;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }
    .container {
      background: #fff;
      padding: 20px 30px;
      margin-top: 50px;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      width: 350px;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    .input-container {
      display: flex;
      margin-bottom: 20px;
    }
    .input-container input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 16px;
    }
    .input-container button {
      padding: 10px 16px;
      margin-left: 8px;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .input-container button:hover {
      background: #45a049;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f9f9f9;
      margin-bottom: 8px;
      padding: 10px;
      border-radius: 6px;
    }
    li.completed span {
      text-decoration: line-through;
      color: gray;
    }
    li button {
      background: #e74c3c;
      border: none;
      color: white;
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
    }
    li button:hover {
      background: #c0392b;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
    <div class="input-container">
      <input type="text" id="taskInput" placeholder="Enter a task">
      <button onclick="addTask()">Add</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  <script>
    function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = taskText;
      span.onclick = () => li.classList.toggle("completed");

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.onclick = () => li.remove();

      li.appendChild(span);
      li.appendChild(delBtn);
      document.getElementById("taskList").appendChild(li);

      input.value = "";
    }
  </script>
</body>
</html>
