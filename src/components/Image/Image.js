import * as React from 'react';
import ImageWrapper from './ImageWrapper';
import ImageReload from './ImageReload';

class Image extends React.PureComponent {
  state = {
    loading: false, // Loading
    failed: false // Load failed
  };

  static defaultProps = {
    width: 0,
    height: 0
  };

  element = null;

  setRef = ref => {
    this.element = null;
  };

  onLoadStart = () => {
    this.setState({ loading: false, failed: false });
  };

  onLoad = () => {
    this.setState({ loading: false, failed: false });
  };

  onLoadFailed = () => {
    this.setState({ loading: false, failed: true });
  };

  onReload = () => {
    this.setState({ loading: false, failed: false });
  };

  renderLoading() {
    return 'Loading...';
  }

  renderFailed() {
    return <ImageReload onReload={this.onReload} />;
  }

  render() {
    return (
      <ImageWrapper width={this.props.width} height={this.props.height}>
        <img
          src={this.props.src}
          alt={this.props.alt}
          ref={this.setRef}
          onLoadStart={this.onLoadStart}
          onLoad={this.onLoad}
          onError={this.onError}
        />
        {this.state.loading && this.renderLoading()}
        {this.state.failed && this.renderFailed()}
      </ImageWrapper>
    );
  }
}

export default Image;
