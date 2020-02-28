export interface Task {
  id: number
  text: string
}

export interface TaskState {
  tasks: Task[]
  nextTaskId: number
}
