export interface ITask {
  content: string
  done: boolean
  id: number
}

export interface TodoProps {
  tasks: ITask[]
  updateTask: (id: number, type: string) => void
}

export interface NewTodoProps {
  addNewTodo: (tasks: ITask) => void
}

export interface TaskProps {
  data: ITask
  updateTask: (id: number, type: string) => void
}