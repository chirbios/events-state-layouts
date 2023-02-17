import React, { useState } from 'react';

export default function IconSwitch(props) {
  return (
    <div className="icon-menu__wrap">
      <span className="material-icons" onClick={props.onSwitch}>
        {props.icon}
      </span>
    </div>
  )
}