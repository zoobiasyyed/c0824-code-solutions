/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

// writing function

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
console.log(writeTodos);

// function readTodos

function readTodos(): Todo[] {
  const readTheTodos = localStorage.getItem('todos-storage');
  if (readTheTodos) {
    const parseTodos = JSON.parse(readTheTodos);
    return parseTodos;
  } else {
    return [];
  }
}
