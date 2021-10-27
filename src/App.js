import React from "react";
import AddTodo from "../src/mytodo/AddTodo";
import FilterTodo from "../src/mytodo/FilterTodo";
import TodoList from "../src/mytodo/TodoList";

function App() {
  const [todos, setTodos] = React.useState({
    todos: [
      { id: 1, isComplited: false, title: "Сходить в универ" },
      { id: 2, isComplited: false, title: "Отработать в чам бакете" },
      { id: 3, isComplited: false, title: "Позаниматься с Виталием" },
      { id: 4, isComplited: false, title: "Покодить" },
      { id: 5, isComplited: false, title: "Покушать" },
    ],
    filteredTodo: [
      { id: 1, isComplited: false, title: "Сходить в универ" },
      { id: 2, isComplited: false, title: "Отработать в чам бакете" },
      { id: 3, isComplited: false, title: "Позаниматься с Виталием" },
      { id: 4, isComplited: false, title: "Покодить" },
      { id: 5, isComplited: false, title: "Покушать" }
  ],
  });

  const toggleTodo = (id) => {
    setTodos({
      todos: todos.todos.map((todo) => {
        if (todo.id === id) {
          todo.isComplited = !todo.isComplited;
        }
        return todo;
      }),
    });
  };

  const removeTodo = (id) => {
    setTodos({ todos: todos.todos.filter((todo) => todo.id !== id) });
  };

  const addTodo = (title) => {
    setTodos({
      todos: todos.todos.concat([
        {
          title,
          id: Date.now(),
          isComplited: false,
        },
      ]),
    });
  };

  const filterTodo = (search) => {
    // debugger
    let array = [];
    let newArray = [];
    if (search !== "") {
      array = todos.todos;
      newArray = array.filter((todo) => {
        const one = todo.title.toLowerCase();
        const filter = search.toLowerCase();
        return one.includes(filter);
      });
    } else {
      // setTodos({todos: todos.filteredTodo})
      newArray = todos.todos;
    }
    setTodos({
      todos: newArray 
    });
    // setTodos(todos.filter(todo => todo.title.includes(title)))
    // return Object.values(todos.todos).join(' ').toLowerCase().includes(search.toLowerCase());
  };

  return (
    <div className="wrapper">
      <h1>Hello, my frends</h1>
      <FilterTodo onFilter={filterTodo} />
      <AddTodo onCreate={addTodo} />
      <TodoList
        todos={todos.todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
