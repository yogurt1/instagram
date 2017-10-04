// @flow
import { getImages } from '../../services/images';
import * as images from '../constants/images';
import type { GenericThunkAction } from '../State';

type ImagesLoadRequestAction = {
  type: typeof images.LOAD_IMAGES_REQUEST
};

type ImagesLoadSuccessAction = {
  type: typeof images.LOAD_IMAGES_SUCCESS,
  payload: Array<Object>,
  meta: {
    loadedLast: boolean
  }
};

type ImagesLoadFailureAction = {
  type: typeof images.LOAD_IMAGES_FAILURE,
  isError: true,
  payload: Error
};

export type ImagesAction = ImagesLoadRequestAction | ImagesLoadSuccessAction | ImagesLoadFailureAction;

const IMAGES_LOAD_LIMIT = 15;

const loadImagesRequest = (): ImagesLoadRequestAction => ({
  type: images.LOAD_IMAGES_REQUEST
});

const loadImagesComplete = (loadedImages: Array<Object>, loadedLast: boolean): ImagesLoadSuccessAction => ({
  type: images.LOAD_IMAGES_SUCCESS,
  payload: loadedImages,
  meta: {
    loadedLast
  }
});

const loadImagesFailed = (error: Error): ImagesLoadFailureAction => ({
  type: images.LOAD_IMAGES_FAILURE,
  payload: error,
  isError: true
});

export const loadImages = (loadMore?: boolean = true): GenericThunkAction<ImagesAction> => async (dispatch, getState) => {
  dispatch(loadImagesRequest());
  const offset = loadMore ? selectImagesCount(getState()) : 0;
  try {
    const images = await getImages(offset, IMAGES_LOAD_LIMIT);
    dispatch(loadImagesComplete(images, !loadMore));
  } catch (error) {
    dispatch(loadImagesFailed(error));
  }
};
