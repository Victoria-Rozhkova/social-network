import React from 'react';
import { useState } from 'react';
import module from './ProfileStatus.module.css';

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };
  return (
    <div className={module.profileStatus}>
      {!editMode && <div >
        <span className={module.status} onClick={activateEditMode}>{props.status}</span>
      </div>}
      {editMode && <div>
        <input className={module.statusInput} autoFocus onBlur={deactivateEditMode} type="text" value={props.status} />
      </div>}
    </div>
  );
};