import { Todo } from ".";

export class TodoList {

    constructor() {

        /* this.todos = []; */
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {

        for (const todo of this.todos) {

            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }

        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage() {

        /* if (localStorage.getItem('todo')) {

            this.todos = JSON.parse(localStorage.getItem('todo'));
            console.log('Cargar Local:', this.todos);

        } else {
            this.todos = [];
        } */

        this.todos = (localStorage.getItem('todo')) ?
            JSON.parse(localStorage.getItem('todo')) : [];

        this.todos = this.todos.map(Todo.fromJson);

    }

}