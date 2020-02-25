import taskModule from 'modules/taskModule'

describe('taskModule', () => {
  it('addTask：新規タスク追加', () => {
    const state = {
      tasks: [],
      nextTaskId: 0,
    }
    const task = 'テストを学ぶ'
    const action = taskModule.actions.addTask(task)
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [{ id: 0, text: task }],
      nextTaskId: 1,
    }

    expect(result).toEqual(expected)
  })

  it('deleteTask：IDと順番が一致', () => {
    const taskId = 0
    const state = {
      tasks: [{ id: taskId, text: 'テストを学ぶ' }],
      nextTaskId: 1,
    }
    const action = taskModule.actions.deleteTask(taskId)
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [],
      nextTaskId: 1,
    }

    expect(result).toEqual(expected)
  })
  it('deleteTask：IDと順番が不一致', () => {
    const taskId = 2
    const state = {
      tasks: [
        { id: taskId, text: 'Reactを学ぶ' },
        { id: 3, text: 'Reduxを学ぶ' },
      ],
      nextTaskId: 4,
    }
    const action = taskModule.actions.deleteTask(taskId)
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [{ id: 3, text: 'Reduxを学ぶ' }],
      nextTaskId: 4,
    }

    expect(result).toEqual(expected)
  })
})
