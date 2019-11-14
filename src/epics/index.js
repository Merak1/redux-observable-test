
import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

//TODO   (5.-) After the action {ping (type: 'PING')} comes dispatched from the reducer, it ends here on the 
//TODO   epic 
export const pingEpic = action$ =>
  action$.pipe(
    ofType('PING'),//? Does the action was of tye 'PING', YES 
    delay(1000), //?   Asynchronously wait 1000ms then continue
    mapTo({ type: 'PONG' }) //?  issues a new action of type 'PONG' dending it to reducers
  );