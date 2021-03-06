import { Action } from '@ngrx/store';

import * as TasksActions from './tasks.actions';
import { State, initialState, reducer } from './tasks.reducer';
import { TasksEntity } from '@kdence-client/tasks/models';

describe('Tasks Reducer', () => {
  const createTasksEntity = (id: number, name = ''): TasksEntity => ({
    id,
    description: '',
    value: 100,
  });

  describe('valid Tasks actions', () => {
    it('loadTasksSuccess should return the list of known Tasks', () => {
      const tasks = [createTasksEntity(123), createTasksEntity(456)];
      const action = TasksActions.loadTasksSuccess({ tasks });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
