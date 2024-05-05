import React from "react";
import "./Photo.css";

const Photo = ({ photo, className }) => (
  <div className={className}>
    <img className="photo" src={photo} alt="product-image" />
  </div>
);

export default Photo;
