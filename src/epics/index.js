import { Observable, of } from 'rxjs';
import { ofType, combineEpics } from 'redux-observable';
import {
  filter,
  delay,
  tap,
  switchMap,
  ignoreElements,
  mapTo
} from 'rxjs/operators';

import { LOAD_STORIES } from '../actions/index';
import { clear } from '../actions/index';

// function loadStoriesEpic(action$) {
//   return action$.pipe(
//     tap(action => console.log(action)),
//     ignoreElements()
//   );
// }

// function loadStoriesEpic(action$) {
//   return action$.pipe(
//     filter(action => action.type === LOAD_STORIES),
//     tap(action => console.log(action)),
//     ignoreElements()
//   );
// }

// function loadStoriesEpic(action$) {
//   return action$
//     .ofType(LOAD_STORIES)
//     .pipe(tap(action => console.log(action)), ignoreElements());
// }

// function loadStoriesEpic(action$) {
//   return action$.ofType(LOAD_STORIES)
//     .pipe(
//       tap(action => console.log(action)),
//       switchMap(() => of(clear()).pipe(
//         delay(2000)
//       ))
//     );
// }

function loadStoriesEpic(action$) {
  return action$.pipe(
    tap(action => console.log(action)),
    ofType(LOAD_STORIES),
    delay(1000),
    mapTo(clear())
  );
}

export const rootEpic = combineEpics(loadStoriesEpic);
