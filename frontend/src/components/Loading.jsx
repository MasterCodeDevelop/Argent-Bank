import React from 'react';
import spinnerSVG from '../assets/svg/spinner.svg';
export default function Loading() {
  return (
    <div className="loading">
      <img src={spinnerSVG} alt="spinner" className="loading-content" />
    </div>
  );
}
