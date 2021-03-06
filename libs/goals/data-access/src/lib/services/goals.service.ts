import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { goalsRoute } from '@kdence-client/core/constants';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CreateGoalDto, GoalsEntity } from '@kdence-client/goals/models';

@Injectable({
  providedIn: 'root',
})
export class GoalsService {
  constructor(private http: HttpClient) {}

  private selectedGoalSubject = new BehaviorSubject<GoalsEntity>({} as any);
  selectedGoal$ = this.selectedGoalSubject.asObservable();

  selectGoal(goal: GoalsEntity) {
    this.selectedGoalSubject.next(goal);
  }

  fetchGoal(householdId: number, goalId: number): Observable<GoalsEntity> {
    return this.http.get<GoalsEntity>(`${goalsRoute(householdId)}/${goalId}`);
  }

  fetchActiveGoals(householdId: number) {
    return this.fetchGoals(householdId, 'active');
  }

  fetchCompletedGoals(householdId: number) {
    return this.fetchGoals(householdId, 'completed');
  }

  createGoal(
    householdId: number,
    goalDto: CreateGoalDto
  ): Observable<GoalsEntity> {
    return this.http.post<GoalsEntity>(goalsRoute(householdId), goalDto);
  }

  private fetchGoals(
    householdId: number,
    type: string
  ): Observable<GoalsEntity[]> {
    return this.http.get<GoalsEntity[]>(goalsRoute(householdId), {
      params: { type },
    });
  }
}
