export interface Goal {
  id: number;
  name: string;
  item: string;
  completionDate?: number;
  fulfilled: boolean;
  completionValue: number;
  earnedValue: number;
}

export interface CreateGoalDto {
  name: string;
  userId: number;
  item: string;
  completionValue: number;
}

export type GoalsEntity = Goal;
