import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { GoalsFacade } from '@kdence-client/goals/data-access';
import { UsersFacade } from '@kdence-client/users/data-access';
import { GoalsEntity } from '@kdence-client/goals/models';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TasksFacade } from '../../../../../tasks/data-access/src/lib/+state/tasks.facade';

@Component({
  selector: 'kdence-client-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalDetailsComponent implements OnInit {
  id$!: Observable<number>;
  goal$!: Observable<GoalsEntity>;
  areActiveGoalsLoaded$ = this.goalsFacade.isActiveGoalsLoaded$;

  constructor(
    private goalsFacade: GoalsFacade,
    private usersFacade: UsersFacade,
    private tasksFacade: TasksFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usersFacade.currentUser$.pipe(take(1)).subscribe((user) => {
      if (user) this.goalsFacade.loadActiveGoals(user.household.id);
    });
    this.id$ = this.route.paramMap.pipe(
      map((params) => Number(params.get('id')))
    );
    this.id$.subscribe(
      (id) => (this.goal$ = this.goalsFacade.selectActiveGoal(id))
    );
  }
}
