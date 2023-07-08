import React from 'react';

export default function ProgressBar({ percent }) {
  const cappedVal = percent ? Math.min(Math.max(percent, 0), 100) : 0;
  return (
    <div className="progress">
      <div
        className="percents"
        style={{ width: `${cappedVal}%` }}
        onMouseOver={(e) => console.log('hovered')}
      >
        {cappedVal ? `${cappedVal}%` : ''}
      </div>
    </div>
  );
}
