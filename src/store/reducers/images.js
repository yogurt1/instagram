// @flow

import { images } from '../constants';
import type { ImagesState } from '../State';
import type { ImagesAction } from '../actions/images';

const reducer = (state: ImagesState, action: ImagesAction): ImagesState => {
  switch (action.type) {
    case images.LOAD_IMAGES_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case images.LOAD_IMAGES_SUCCESS: {
      return {
        loading: false,
        images: {...state.images}
      };
    }
    case images.LOAD_IMAGES_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    default: {
      (action: empty);
      return state;
    }
  }
};

export default reducer;
