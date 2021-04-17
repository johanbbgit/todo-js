import './styles.css';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

//const newTodo = new Todo('Aprender JS');
//todoList.nuevoTodo(newTodo);

//todoList.todos[0].imprimirClase();
console.log('Todos', todoList.todos);


/* todoList.todos.forEach( todo => crearTodoHtml( todo ) );

const tarea = new Todo('Aprender JavaScript!!');
todoList.nuevoTodo(tarea);
//tarea.completado = false;
console.log(todoList);
crearTodoHtml(tarea);


localStorage.setItem('mi-key', 'ABC1234');

setTimeout(() => {
    localStorage.removeItem('mi-key');
}, 1500); */