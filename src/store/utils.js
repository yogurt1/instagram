export const isAction = x => typeof x === 'object' && typeof x.type === 'object';

export const getRejectHandler = (dispatch, next, action) => error =>
  isAction(error)
    ? dispatch(error)
    : next(action)
