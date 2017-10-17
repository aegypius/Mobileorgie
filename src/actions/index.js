import * as BandActions from './bands';
import * as ReviewActions from './reviews';
import * as NavigationActions from './navigation';

export const ActionCreators = Object.assign({},
  BandActions,
  ReviewActions,
  NavigationActions,
);
