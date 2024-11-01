'use strict';
let todos = readTodos();
// writing function
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
// function readTodos
function readTodos() {
  const readTheTodos = localStorage.getItem('todos-storage');
  if (readTheTodos) {
    const parseTodos = JSON.parse(readTheTodos);
    return parseTodos;
  } else {
    return [];
  }
}
