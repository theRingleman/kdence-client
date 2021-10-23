import { UsersEntity } from '@kdence-client/users/data-access';

export interface Task {
  id: number;
  description: string;
  value: number;
  completionDate?: number;
  approval?: TaskApproval;
}

export interface TaskApproval {
  id: number;
  approved: number;
  user: UsersEntity;
}

export interface CreateTaskDto {
  description: string;
  value: number;
}

export type TasksEntity = Task;
