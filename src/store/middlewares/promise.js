import { getRejectHandler } from '../utils';

const isPromise = x => x instanceof Promise;

const promiseMiddleware = ({ dispatch }) => next => action =>
  isPromise(action)
    ? action
      .then(dispatch)
      .catch(getDispatchHandler(dispatch, next, action))
    : next(action);

export default promiseMiddleware;
