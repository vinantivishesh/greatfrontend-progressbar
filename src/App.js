import React, { useState } from 'react';
import './style.css';
import ProgressBar from './ProgressBar';

export default function App() {
  return (
    <div className="group-progress">
      <ProgressBar />
      <ProgressBar percent={-50} />
      <ProgressBar percent={2} />
      <ProgressBar percent={10} />
      <ProgressBar percent={25} />
      <ProgressBar percent={50} />
      <ProgressBar percent={99.6} />
      <ProgressBar percent={677} />
    </div>
  );
}
