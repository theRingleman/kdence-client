export interface Goal {
  id: number;
  name: string;
  item: string;
  completionDate?: number;
  fulfilled: boolean;
  completionValue: number;
  earnedValue: number;
}
