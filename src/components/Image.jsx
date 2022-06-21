import React from "react";
import PropTypes from "prop-types";

export const Image = ({ src, alt, width, height, ...attrs }) => {
  if (!src) src = `https://dummyimage.com/${width}x${height}`;

  return <img {...attrs} src={src} alt={alt} width={width} height={height} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  src: "",
  alt: "image name",
  width: "100px",
  height: "100px",
};
