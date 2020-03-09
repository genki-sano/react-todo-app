import taskModule from 'modules/taskModule'

describe('taskModule', () => {
  it('addTask：タスクが正常に追加できる', () => {
    const state = {
      tasks: [],
      nextTaskId: 0,
      focus: false,
    }
    const task = 'テストを学ぶ'
    const action = taskModule.actions.addTask(task)
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [{ id: 0, text: task, completed: false }],
      nextTaskId: 1,
      focus: true,
    }

    expect(result).toEqual(expected)
  })

  it('editTask：タスクが正常に編集できる', () => {
    const id = 0
    const state = {
      tasks: [{ id: id, text: 'テストを学ぶ', completed: false }],
      nextTaskId: 1,
      focus: false,
    }
    const task = 'テストを学んだ'
    const action = taskModule.actions.editTask({ id: id, text: task })
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [{ id: id, text: task, completed: false }],
      nextTaskId: 1,
      focus: false,
    }

    expect(result).toEqual(expected)
  })
  it('editTask：指定したIDがない時に変化がないと何も変化しない', () => {
    const id = 2
    const state = {
      tasks: [{ id: 0, text: 'テストを学ぶ', completed: false }],
      nextTaskId: 1,
      focus: false,
    }
    const task = 'テストを学んだ'
    const action = taskModule.actions.editTask({ id: id, text: task })
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [{ id: 0, text: 'テストを学ぶ', completed: false }],
      nextTaskId: 1,
      focus: false,
    }

    expect(result).toEqual(expected)
  })

  it('toggleTask：タスクを完了にする', () => {
    const taskId = 0
    const state = {
      tasks: [{ id: taskId, text: 'テストを学ぶ', completed: false }],
      nextTaskId: 1,
      focus: false,
    }
    const action = taskModule.actions.toggleTask(taskId)
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [{ id: taskId, text: 'テストを学ぶ', completed: true }],
      nextTaskId: 1,
      focus: false,
    }

    expect(result).toEqual(expected)
  })
  it('toggleTask：タスクを未完了にする', () => {
    const taskId = 0
    const state = {
      tasks: [{ id: taskId, text: 'テストを学ぶ', completed: true }],
      nextTaskId: 1,
      focus: false,
    }
    const action = taskModule.actions.toggleTask(taskId)
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [{ id: taskId, text: 'テストを学ぶ', completed: false }],
      nextTaskId: 1,
      focus: false,
    }

    expect(result).toEqual(expected)
  })
  it('toggleTask：指定したIDがない時に変化がないと何も変化しない', () => {
    const taskId = 2
    const state = {
      tasks: [{ id: 0, text: 'テストを学ぶ', completed: false }],
      nextTaskId: 1,
      focus: false,
    }
    const action = taskModule.actions.toggleTask(taskId)
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [{ id: 0, text: 'テストを学ぶ', completed: false }],
      nextTaskId: 1,
      focus: false,
    }

    expect(result).toEqual(expected)
  })

  it('deleteTask：IDと順番が一致した時に削除できる', () => {
    const taskId = 0
    const state = {
      tasks: [{ id: taskId, text: 'テストを学ぶ', completed: false }],
      nextTaskId: 1,
      focus: false,
    }
    const action = taskModule.actions.deleteTask(taskId)
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [],
      nextTaskId: 1,
      focus: false,
    }

    expect(result).toEqual(expected)
  })
  it('deleteTask：IDと順番が不一致の時に削除できる', () => {
    const taskId = 2
    const state = {
      tasks: [
        { id: taskId, text: 'Reactを学ぶ', completed: false },
        { id: 3, text: 'Reduxを学ぶ', completed: false },
      ],
      nextTaskId: 4,
      focus: false,
    }
    const action = taskModule.actions.deleteTask(taskId)
    const result = taskModule.reducer(state, action)
    const expected = {
      tasks: [{ id: 3, text: 'Reduxを学ぶ', completed: false }],
      nextTaskId: 4,
      focus: false,
    }

    expect(result).toEqual(expected)
  })
})
