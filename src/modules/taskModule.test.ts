import taskModule from './taskModule'

describe('taskModule', () => {
  test('addTask Action', () => {
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
})
