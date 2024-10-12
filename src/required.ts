interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Required<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

// const todo2 = updateTodo(todo1, {
//   description: "throw out trash",
// });

const todo2 = updateTodo(todo1, {
  title: "organize keyboard",
  description: "throw out trash",
});



// const todo3 = updateTodo(todo1, {});

const todo3 = updateTodo(todo1, {
  title: "organize mouse",
  description: "throw out dustbin",
});

export default { todo1, todo2, todo3 };