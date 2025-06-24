document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('add-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    addBtn.addEventListener('click', addTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const li = document.createElement('li');
      li.classList.add('task');
  
      // Checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
        li.classList.toggle('completed', checkbox.checked);
      });
  
      const span = document.createElement('span');
      span.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
      removeBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(removeBtn);
      taskList.appendChild(li);
  
      taskInput.value = '';
    }
  });