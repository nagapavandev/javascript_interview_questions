interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Readonly<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  title: "organize desk",
  description: "clear clutter",
});


const todo3 = updateTodo(todo1, {
  title: "organize desk",
  description: "clear clutter",
});

function updateReadOnlyTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Readonly<Todo> {
  return { ...todo, ...fieldsToUpdate };
}

const readonlyTodo = updateReadOnlyTodo(todo1, {
  description: "clear readonly",
});

// readonlyTodo.title="bullshit"

export default { todo1, todo2, todo3, readonlyTodo };