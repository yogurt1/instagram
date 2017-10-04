import * as React from 'react';

const ImageWrapper = ({ width, height, children }) => (
  <div
    className='ImageWrapper'
    style={{ width, height }}
  >
    {children}
  </div>
);

export default ImageWrapper;
