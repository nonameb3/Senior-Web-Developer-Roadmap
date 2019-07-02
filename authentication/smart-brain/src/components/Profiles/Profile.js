import React from 'react';
import './Profile.css';

export default function Profile({onModelToggle}) {
  return (
    <div className="profile-model">
      <button onClick={onModelToggle}>click me!</button>
    </div>
  )
}
