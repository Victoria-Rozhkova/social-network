import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import module from './ProfileStatus.module.css';

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status || "...");

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={module.profileStatus}>
      {!editMode && <div >
        <span className={module.status} onDoubleClick={activateEditMode}>{props.status || <span className={module.status}>...no status...</span>}</span>
      </div>}
      {editMode && <div>
        <input className={module.statusInput} autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} type="text" value={status} />
      </div>}
    </div>
  );
};