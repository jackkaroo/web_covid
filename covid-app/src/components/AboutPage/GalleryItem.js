import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function GalleryItem({ src, title }) {
  return (
    <div>
      <div className="gallery_image">
        <img src={src} alt="" />
      </div>
      <div>{title}</div>
    </div>
  );
}

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GalleryItem;
