import * as React from 'react';
import noop from 'noop3';

class ImageReload extends React.Component {
  static defaultProps = {
    onReloadStart: noop,
    onReloadComplete: noop,
    onReloadFailed: noop
  };

  element = null;

  componentDidMount() {
    this.element = new global.Image();
    this.element.onLoadStart = this.props.onReloadStart();
    this.element.onLoad = this.props.onReloadComplete();
    this.element.onError = this.props.onReloadFailed();
  }

  render() {
    return (
      <div
        className='image-reload'
        onClick={this.onClickReload}
      >
        <TranslatedMessage message='image_reload' />
      </div>
    );
  }
}
