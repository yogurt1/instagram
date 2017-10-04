import * as React from 'react';
import { getImages } from '../../services/images';

/**
 * Images load limit
 */
const IMAGES_LOAD_LIMIT = 15;

class Images extends React.Component {
  state = {
    loading: false,
    images: []
  };

  async loadImages() {
    this.setState({ loading: true });
    const newImages = await getImages(0, 15)
    this.setState(prevState => {
      return {
        loading: false,
        images: [...prevState, ...newImages]
      };
    });
  }

  componentDidMount() {
    this.loadImages();
  }

  render() {
    return this.state.loading ? 'loading...' : this.state.images.map(src => <img src={src} />);
  }
}

export default Images;
