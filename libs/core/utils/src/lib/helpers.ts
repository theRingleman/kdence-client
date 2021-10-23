import { TasksEntity } from '@kdence-client/tasks/models';

export const getNullTask = (): TasksEntity => ({
  description: '',
  value: 0,
  id: 0,
});
