type Todo = {
  title: string
  description: string
  completed: boolean
}

const todo: Readonly<Todo> = {
  title: 'Ler Fundação de Isaac Asimov',
  description: 'Começar a série de livros Fundação',
  completed: false,
}

function updateTodo(todo: Todo, fieldsToUpadate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpadate }
}

const newTodo: Todo = updateTodo(todo, { completed: true })

console.log('todo', todo)

console.log('newTodo', newTodo)

// Pick
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todoQuickview: TodoPreview = {
  title: 'Ler Neuromancer de William Gibson',
  completed: false,
}
