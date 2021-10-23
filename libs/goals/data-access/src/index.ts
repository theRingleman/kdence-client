import * as GoalsActions from './lib/+state/goals.actions';
import * as GoalsFeature from './lib/+state/goals.reducer';
import * as GoalsSelectors from './lib/+state/goals.selectors';

export * from './lib/+state/goals.facade';
export { GoalsActions, GoalsFeature, GoalsSelectors };
export * from './lib/goals-data-access.module';
export * from './lib/services/goals.service';
