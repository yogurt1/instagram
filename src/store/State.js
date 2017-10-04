// @flow

type Image = {
  +id: string
};

export type ImagesState = {
  +loading: boolean,
  +images: {
    +
  }
};

export type State = {
  +images: ImagesState
};

type GetState = () => State;
export type GenericDispatch<T> = (action: T) => any;
export type GenericThunkAction<T> = (dispatch: GenericDispatch<T>, getState: GetState) => any;
