import partial from './partial';
import required from './required';
import readonly from './readonly';
import { inspect } from 'util';

const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet('World'));

const args = process.argv.slice(2);

function handleAction(action: any) {
  switch (action) {
    case 'partial':
      console.dir(partial.todo1);
      console.log(`todo2 is ${inspect(partial.todo2)}`);
      console.log(`todo3 is ${inspect(partial.todo3)}`);
      break;
    case 'required':
      console.dir(required.todo1);
      console.log(`todo2 is ${inspect(required.todo2)}`);
      console.log(`todo3 is ${inspect(required.todo3)}`);
      break;
    case 'readonly':
      console.dir(readonly.todo1);
      console.log(`todo2 is ${inspect(readonly.todo2)}`);
      console.log(`todo3 is ${inspect(readonly.todo3)}`);
      console.log(`readonly todo is ${inspect(readonly.readonlyTodo)}`);
      break;
  }
}

handleAction(args[0]);