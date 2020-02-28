export interface Task {
  id: number
  text: string
  completed: boolean
}

export interface TaskState {
  tasks: Task[]
  nextTaskId: number
}
