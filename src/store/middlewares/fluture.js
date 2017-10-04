import { isFuture } from 'fluture/src/core';
import { getRejectHandler } from '../utils';

const flutureMiddleware = ({ dispatch }) => next => action =>
  isFuture(action)
    ? action
      .fork(getRejectHandler(dispatch, next), dispatch)
    : next(action)

export default flutureMiddleware;
